import { Box, Flex } from "@chakra-ui/react";
import { BsPersonPlus } from "react-icons/bs";
import styles from "./friendInvitationCard.module.css";
import useSendFriendInvitation from "../../hooks/useSendFriendInvitation";
import { useState } from "react";

interface Props {
  username: string;
}

const FriendInvitationCard = ({ username }: Props) => {
  const [shouldFetch, setShouldFetch] = useState(false);

  const { data } = useSendFriendInvitation(
    localStorage.getItem("token") || "",
    username,
    shouldFetch
  );

  data && console.log("Sending invitation...", data);

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      width={"100%"}
      gap={5}
    >
      {username}
      <Box cursor={"pointer"} onClick={() => setShouldFetch(true)}>
        <BsPersonPlus className={styles.addFriendIcon} />
      </Box>
    </Flex>
  );
};

export default FriendInvitationCard;
