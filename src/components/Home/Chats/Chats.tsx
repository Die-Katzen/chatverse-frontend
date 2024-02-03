import { Spinner } from "@chakra-ui/react";
import useChats from "../../../hooks/useChats";
import ChatCard from "../../Cards/ChatCard";
import SearchBar from "../../SearchBar/SearchBar";
import formatData from "../../../utils/formatData";

export interface User {
  username: string;
  lastMessage: string;
  time: string;
  profileImg: string;
}

const Chats = () => {
  const { data, isLoading } = useChats(localStorage.getItem("token") || "");

  const profileImgs = [
    "https://unsplash.it/51/51",
    "https://unsplash.it/53/53",
  ];

  // console.log("dataaa ", data);

  if (isLoading) return <Spinner />;

  return (
    <>
      <SearchBar
        onSearch={(searchText) => console.log("searchText ", searchText)}
      />
      {data?.items &&
        [...data.items].reverse().map(
          (
            chatObj: {
              friend: string;
              message: {
                receiverUsername: string;
                message: string;
                createdAt: string;
              };
            },
            index: number
          ) => {
            const chat = chatObj.message;
            // console.log("chat ", chat);
            const user: User = {
              username: chatObj.friend,
              lastMessage: chat.message,
              time: formatData(chat.createdAt),
              profileImg: profileImgs[index],
            };
            return <ChatCard key={chatObj.friend} user={user} />;
          }
        )}
    </>
  );
};

export default Chats;
