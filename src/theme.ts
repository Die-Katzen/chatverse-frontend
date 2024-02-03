import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false, // default
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#ede8f4",
      100: "#dcd2e8",
      200: "#c1b0d7",
      300: "#a78ec6",
      400: "#8c6cb5",
      500: "#724f9f",
      600: "#5a3e7d",
      700: "#412d5b",
      800: "#291c39",
      900: "#100b17",
    },
    white: "#ede8f4",
  },
});

export default theme;
