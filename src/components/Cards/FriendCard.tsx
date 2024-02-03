import {
  Card,
  CardBody,
  Heading,
  Stack,
  Image,
  Flex,
  Box,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { BiMessageRoundedDetail } from "react-icons/bi";
import styles from "./friendCard.module.css";
interface Props {
  user: Friend;
}

export interface Friend {
  username: string;
  profileImg: string;
}

const FriendCard = ({ user }: Props) => {
  const navigate = useNavigate();
  const params = useParams();
  const currentRelativeURL = params["*"];

  return (
    <Card
      cursor={"pointer"}
      variant={"filled"}
      direction={{ base: "row" }}
      overflow="hidden"
      display={"flex"}
      marginBottom={5}
    >
      <Flex
        padding={"10px"}
        paddingRight={0}
        alignItems={"center"}
        justifyContent={"center"}
        onClick={() =>
          navigate("/user", {
            state: { selectedUser: user, origin: currentRelativeURL },
          })
        }
      >
        <Image
          objectFit="cover"
          width={"50px"}
          height={"50px"}
          borderRadius={"30px"}
          src={user.profileImg}
          alt="Caffe Latte"
        />
      </Flex>

      <Stack flex={"1"}>
        <CardBody
          padding={0}
          paddingRight={"0.5rem"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box
            paddingLeft={"1rem"}
            display={"flex"}
            alignItems={"center"}
            width={"100%"}
            height={"100%"}
            onClick={() =>
              navigate("/user", {
                state: { selectedUser: user, origin: currentRelativeURL },
              })
            }
          >
            <Heading size="sm">{user.username}</Heading>
          </Box>
          <Box display={"flex"} gap={2}>
            <Box
              padding={3}
              onClick={() =>
                navigate("/chat", {
                  state: { selectedUser: user, origin: currentRelativeURL },
                })
              }
            >
              <BiMessageRoundedDetail
                className={styles.icons}
                title={"Chat with your friend"}
              />
            </Box>
          </Box>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default FriendCard;
