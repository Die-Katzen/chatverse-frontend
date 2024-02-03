import { Badge, Image, VStack, Text, HStack } from "@chakra-ui/react";
import styles from "./userContainer.module.css";
import { User } from "../AuthProvider/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";

interface UserContainerProps {
  user: User | null;
}

const UserContainer = ({ user }: UserContainerProps) => {
  const navigate = useNavigate();
  const params = useParams();
  const currentRelativeURL = params["*"];
  console.log(params);

  return (
    <HStack
      cursor={"pointer"}
      gap={5}
      width={"100%"}
      onClick={() =>
        navigate("/user", {
          state: { selectedUser: user, origin: currentRelativeURL },
        })
      }
    >
      <Image className={styles.userImg} src="https://unsplash.it/50/50" />
      <VStack alignItems={"flex-start"}>
        <Text>{user ? user.username : ""}</Text>
        <Badge colorScheme="green">Online</Badge>
      </VStack>
    </HStack>
  );
};

export default UserContainer;
