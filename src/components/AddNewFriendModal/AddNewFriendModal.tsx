import { Box, Button, Flex, Heading, Spinner } from "@chakra-ui/react";
import SearchBar from "../SearchBar/SearchBar";
import theme from "../../theme";
import useAddFriendSearch from "../../hooks/useAddFriendSearch";
import { useState } from "react";
import FriendInvitationCard from "./FriendInvitationCard";
import useOpenInvitations from "../../hooks/useOpenInvitations";

interface Props {
  setOpenModal: (arg: boolean) => void;
}

const AddNewFriendModal = ({ setOpenModal }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const { data: friendSearchData, isLoading } = useAddFriendSearch(
    localStorage.getItem("token") || "",
    inputValue
  );

  const { data: openInvitationsData } = useOpenInvitations(
    localStorage.getItem("token") || ""
  );

  function usersToDisplay() {
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

    const openInvitations = invitationReceivedUsernames?.concat(
      invitationSentUsernames
    );

    const usersToDsiplay = friendSearchData?.users?.filter(
      (element: string) => !openInvitations?.includes(element)
    );

    return usersToDsiplay;
  }
  const users = usersToDisplay();

  const handleSearch = (searchText: string) => {
    setInputValue(searchText);
  };

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
        if (element.classList[0] === "modal-overlay") setOpenModal(false);
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
        transform={"translate(-50%, -50%)"}
        background={theme?.colors?.gray[700]}
        width={"80%"}
        height={"70%"}
        borderRadius={"20px"}
      >
        <Heading as="h2" fontSize={"2xl"}>
          Add a new Friend
        </Heading>
        <SearchBar onSearch={handleSearch} />
        <Flex
          width={"85%"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          gap={4}
          overflowY={"auto"}
          paddingRight={5}
        >
          {isLoading && <Spinner />}

          {users?.map((username: string) => {
            return <FriendInvitationCard key={username} username={username} />;
          })}
        </Flex>
        <Button
          position={"absolute"}
          right={"10px"}
          top={"10px"}
          borderRadius={"30px"}
          padding={0}
          onClick={() => setOpenModal(false)}
        >
          x
        </Button>
      </Flex>
    </Box>
  );
};

export default AddNewFriendModal;
