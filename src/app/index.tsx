import { FeedPage, LoginPage, Redirect, RegisterPage, UserPage } from "@pages/index";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { firebaseConfig } from "@app/firebase";
import { initializeApp } from "firebase/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const app = initializeApp(firebaseConfig);

const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <RouterProvider router={router} />
        </ChakraProvider>
      </QueryClientProvider>
    </>
  );
}
