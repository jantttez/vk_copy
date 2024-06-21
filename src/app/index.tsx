import { FeedPage, Redirect, UserPage } from "@pages/index";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./providers/theme-provider";

const router = createBrowserRouter([
  {
    path: "/feed",
    element: <FeedPage />,
  },
  {
    path: "/",
    element: <Redirect />,
  },
  {
    path: "/:userId",
    element: <UserPage />,
  },
]);

export function App() {
  return (
    <>
      <ThemeProvider>
        <ChakraProvider>
          <RouterProvider router={router} />
        </ChakraProvider>
      </ThemeProvider>
    </>
  );
}
