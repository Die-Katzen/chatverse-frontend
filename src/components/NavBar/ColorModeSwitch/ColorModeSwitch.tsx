import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { useRef } from "react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const windowWidth = useRef(window.innerWidth).current;

  return (
    <HStack>
      <Switch
        colorScheme="purple"
        isChecked={colorMode === "dark"} //checked when it is in dark mode
        onChange={toggleColorMode}
      />
      <Text whiteSpace="nowrap">
        {windowWidth > 1024
          ? colorMode === "dark"
            ? "Dark Mode"
            : "Light Mode"
          : ""}
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
