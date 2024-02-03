import { HStack } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch/ColorModeSwitch";
import UserContainer from "../UserContainer/UserContainer";
import { useAuth } from "../../hooks/useAuth";

const NavBar = () => {
  // TODO: asi se accede a current user que tiene token y username
  const { currentUser } = useAuth();
  // console.log("currentUser ", currentUser);

  return (
    <HStack justifyContent="space-between" paddingBottom={10} paddingTop={3}>
      <UserContainer user={currentUser} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
