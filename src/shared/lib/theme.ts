import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { Theme } from "@shared/types";

export const theme = extendTheme(
  {
    initialColorMode: "dark",
    useSystemColorMode: false,

    colors: {
      brand: {
        light: "rgba(255,255,255,0.7)",
        dark: "rgba(10,10,10,0.9)",
        activeBg: "rgba(213, 211, 255, 0.2)",
      },
    },

    styles: {
      global: (props: any) => ({
        html: {
          backgroundColor: props.colorMode === Theme.dark ? "brand.dark" : "brand.light",
        },
        body: {
          backgroundColor: props.colorMode === Theme.dark ? "brand.dark" : "brand.light",
          color: props.colorMode === Theme.dark ? "white" : "black",
        },
      }),
    },
  },
  withDefaultColorScheme({ colorScheme: "brand" })
);
