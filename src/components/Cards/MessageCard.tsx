import { Card, CardBody, CardFooter, Heading } from "@chakra-ui/react";
import theme from "../../theme";
import styles from "./messageCard.module.css";
import { useAuth } from "../../hooks/useAuth";
import formatData from "../../utils/formatData";
import { MessageObj } from "../../utils/types";

interface MessageCardProps {
  data: MessageObj;
}

const MessageCard = ({ data }: MessageCardProps) => {
  const { currentUser } = useAuth();
  const currentUsername = currentUser?.username;

  const correctClassName =
    data.senderUsername === currentUsername
      ? `${styles.senderMessage}`
      : `${styles.receiverMessage}`;

  return (
    <Card size={"sm"} className={`${styles.message} ${correctClassName}`}>
      <CardBody fontSize="sm" padding={0}>
        <Heading size="sm" paddingBottom={1}>
          {data.senderUsername === currentUsername
            ? "You"
            : data.senderUsername}
        </Heading>
        {data.message}
      </CardBody>
      <CardFooter
        className={styles.timeStamp}
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
        fontSize="xs"
        padding={0}
        paddingTop={1}
        color={theme.colors.gray[500]}
      >
        {formatData(data.createdAt)}
        {/* {data.createdAt} */}
      </CardFooter>
    </Card>
  );
};

export default MessageCard;
