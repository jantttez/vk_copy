import { Feed, Redirect } from "@pages/index";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/feed",
    element: <Feed />,
  },
  {
    path: "/",
    element: <Redirect />,
  },
]);

export function App() {
  return (
    <>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </>
  );
}
