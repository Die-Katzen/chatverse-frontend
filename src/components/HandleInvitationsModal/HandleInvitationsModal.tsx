import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spinner,
  Text,
} from "@chakra-ui/react";

import theme from "../../theme";
import useOpenInvitations from "../../hooks/useOpenInvitations";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./handleInvitationsModal.module.css";
import { useState } from "react";
import useAcceptInvitation from "../../hooks/useAcceptInvitation";
import useCancelInvitation from "../../hooks/useCancelnvitation";
import useRejectInvitation from "../../hooks/useRejectInvitation";

interface Props {
  setOpenInvitationsModal: (arg: boolean) => void;
}

const HandleInvitationsModal = ({ setOpenInvitationsModal }: Props) => {
  const [clickedUsername, setClickedUsername] = useState("");
  const [shouldFetchAccept, setShouldFetchAccept] = useState(false);
  const [shouldFetchReject, setShouldFetchReject] = useState(false);
  const [shouldFetchCancel, setShouldFetchCancel] = useState(false);

  const { data: openInvitationsData, isLoading } = useOpenInvitations(
    localStorage.getItem("token") || ""
  );

  useAcceptInvitation(
    localStorage.getItem("token") || "",
    clickedUsername,
    shouldFetchAccept
  );
  useCancelInvitation(
    localStorage.getItem("token") || "",
    clickedUsername,
    shouldFetchCancel
  );
  useRejectInvitation(
    localStorage.getItem("token") || "",
    clickedUsername,
    shouldFetchReject
  );

  const invitationReceivedUsernames =
    openInvitationsData?.invitationsReceived?.map(
      (obj: { senderUsername: "" }) => {
        return obj?.senderUsername;
      }
    );

  const invitationSentUsernames = openInvitationsData?.invitationsSent?.map(
    (obj: { receiverUsername: "" }) => {
      return obj?.receiverUsername;
    }
  );

  return (
    <Box
      zIndex={1000}
      position={"fixed"}
      top={"50%"}
      left={"50%"}
      transform={"translate(-50%, -50%)"}
      height={"100%"}
      width={"100%"}
      background={"rgba(1, 5, 2, 0.6)"}
      className="modal-overlay"
      onClick={(event) => {
        const element = event.target as HTMLElement;
        if (element.classList[0] === "modal-overlay")
          setOpenInvitationsModal(false);
      }}
    >
      <Flex
        className="modal"
        flexDirection={"column"}
        alignItems={"center"}
        paddingY={10}
        paddingX={5}
        position={"absolute"}
        top={"50%"}
        left={"50%"}
        gap={6}
        transform={"translate(-50%, -50%)"}
        background={theme?.colors?.gray[700]}
        width={"80%"}
        height={"70%"}
        borderRadius={"20px"}
      >
        <Heading as="h2" fontSize={"2xl"}>
          Active invitations
        </Heading>
        <Flex
          width={"100%"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          gap={2}
          overflowY={"auto"}
          // paddingRight={5}
        >
          {isLoading && <Spinner />}

          <Heading as={"h3"} fontSize={"md"}>
            Invitations Received ({invitationReceivedUsernames?.length})
          </Heading>
          <Flex paddingLeft={4} flexDirection={"column"} gap={5} width={"100%"}>
            {invitationReceivedUsernames?.map(
              (username: string, index: number) => {
                return (
                  <Flex
                    key={index}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    width={"100%"}
                    gap={5}
                  >
                    {username}
                    <HStack gap={5}>
                      <Box
                        onClick={() => {
                          console.log("aceptando a", username);
                          setClickedUsername(username);
                          setShouldFetchAccept(true);
                        }}
                      >
                        <AiOutlineCheckCircle
                          cursor={"pointer"}
                          className={styles.icon}
                        />
                      </Box>
                      <Box
                        onClick={() => {
                          console.log("declinar amigo");
                          setClickedUsername(username);
                          setShouldFetchReject(true);
                        }}
                      >
                        <AiOutlineCloseCircle
                          cursor={"pointer"}
                          className={styles.icon}
                        />
                      </Box>
                    </HStack>
                  </Flex>
                );
              }
            )}
          </Flex>

          <Heading as={"h3"} fontSize={"md"} paddingTop={5}>
            Invitations Sent ({invitationSentUsernames?.length})
          </Heading>
          <Flex paddingLeft={4} flexDirection={"column"} gap={5} width={"100%"}>
            {isLoading && <Spinner />}

            {invitationSentUsernames?.map((username: string, index: number) => {
              return (
                <Flex
                  key={index}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  width={"100%"}
                  gap={5}
                >
                  <Text>{username}</Text>
                  <Box
                    onClick={() => {
                      console.log("Cancelar invitacion");
                      setClickedUsername(username);
                      setShouldFetchCancel(true);
                    }}
                  >
                    <AiOutlineCloseCircle
                      cursor={"pointer"}
                      className={styles.icon}
                    />
                  </Box>
                </Flex>
              );
            })}
          </Flex>
        </Flex>
        <Button
          position={"absolute"}
          right={"10px"}
          top={"10px"}
          borderRadius={"30px"}
          padding={0}
          onClick={() => setOpenInvitationsModal(false)}
        >
          x
        </Button>
      </Flex>
    </Box>
  );
};

export default HandleInvitationsModal;
