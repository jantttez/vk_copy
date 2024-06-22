import { FeedPage, LoginPage, Redirect, RegisterPage, UserPage } from "@pages/index";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { firebaseConfig } from "@app/firebase";
import { initializeApp } from "firebase/app";

export const app = initializeApp(firebaseConfig);

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
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
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
