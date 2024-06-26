import { PropsWithChildren } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@shared/lib/index";

export function AppChakraUIProvider({ children }: PropsWithChildren) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
