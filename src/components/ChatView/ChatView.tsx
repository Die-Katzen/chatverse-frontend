// import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import customSocket from "../../utils/socket";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Grid,
  GridItem,
  Input,
} from "@chakra-ui/react";
import ChatHeader from "./ChatHeader/ChatHeader";
import MessageCard from "../Cards/MessageCard";
import styles from "./chatView.module.css";
// import useSendMessage from "../../hooks/useSendMessage";
import { useState, useEffect, useRef } from "react";
import { getMessages } from "../../services/messageServices";
import { MessageObj } from "../../utils/types";

const ChatView = () => {
  const { state } = useLocation();
  const selectedUser = state.selectedUser;
  const origin = state.origin;
  console.log(origin);

  // const { data: messagesData } = useMessages(
  //   localStorage.getItem("token") || "",
  //   selectedUser.username
  // );

  const [message, setMessage] = useState("");
  // const [shouldFetch, setShouldFetch] = useState(false);
  const [messages, setMessages] = useState<MessageObj[]>([]);

  console.log("messages", messages);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    getMessages(
      localStorage.getItem("token") || "",
      selectedUser.username
    ).then((m) => {
      setMessages(m);
    });
  }, [selectedUser]);
  //
  useEffect(() => {
    const handleNewMessage = (msg: MessageObj) => {
      console.log("Mensaje recibido ", msg);

      console.log("MEnsajes anteriores: ", messages);
      console.log("MESSAGE RECEIVED:-------", msg);
      setMessages((prevMessages) => [msg, ...prevMessages]);
    };

    customSocket.on("private message", handleNewMessage);

    return () => {
      customSocket.off("private message", handleNewMessage);
    };
  }, [messages]);

  return (
    <Grid
      as={"main"}
      // height={"100vh"}
      templateAreas={{
        base: `"main" 
              "footer"`,
      }}
      templateRows={{
        base: "90vh 50px",
      }}
      templateColumns={{
        base: "1fr",
      }}
    >
      <GridItem area="main">
        <ChatHeader user={selectedUser} origin={origin} />
        <Flex
          overflowY="scroll"
          className="chat-history-container"
          marginBottom={5}
          flexDirection="column"
          paddingRight={2}
          height={"85%"}
          ref={messagesEndRef}
        >
          <Box className={styles.messages}>
            {messages &&
              [...messages]
                .reverse()
                .map((messageObj: MessageObj, index: number) => {
                  // console.log(messageObj);
                  return <MessageCard key={index} data={messageObj} />;
                })}
          </Box>
        </Flex>
      </GridItem>
      <GridItem area="footer">
        <Box>
          <form
            id="form"
            action=""
            className="input-bar"
            onSubmit={(e) => {
              // const input = document.getElementById(
              //   "input"
              // ) as HTMLInputElement;

              e.preventDefault();
              // if (input?.value) {
              customSocket.emit("private message", {
                content: message,
                to: selectedUser.username,
              });
              // input.value = "";
              // }

              setMessage("");
            }}
          >
            <FormControl display={"flex"} flexDirection="row" gap={2}>
              <Input
                id="input"
                autoComplete="off"
                type="text"
                placeholder="Type a message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
              <Button type="submit">Send</Button>
            </FormControl>
          </form>
        </Box>
      </GridItem>
    </Grid>
  );
};
export default ChatView;
