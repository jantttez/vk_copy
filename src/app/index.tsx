import { EditPage, FeedPage, LoginPage, PaymentPage, Redirect, RegisterPage, UserPage } from "@pages/index";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { firebaseConfig } from "@app/firebase";
import { initializeApp } from "firebase/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { theme } from "@shared/lib/index";
import { ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const app = initializeApp(firebaseConfig);

const httpLink = new HttpLink({
  uri: "https://selected-bee-50.hasura.app/v1/graphql",
});

const authLink = setContext((_, { headers }) => {
  const contentType = "application/json";
  const xHasuraAdminSecret = "D9oHA5gWSGFYff17BYVVeKXe3IGbWRNfH9HQLi9q5kr2qljDPtOI20RPCsrNnHfW";

  return {
    headers: {
      ...headers,
      "content-type": contentType,
      "x-hasura-admin-secret": xHasuraAdminSecret,
    },
  };
});

const queryClient = new QueryClient();
const apolloClient = new ApolloClient({
  link: from([authLink, httpLink]),
  cache: new InMemoryCache(),
});

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
  {
    path: "/payments",
    element: <PaymentPage />,
  },
  {
    path: "/:userId/edit",
    element: <EditPage />,
  },
]);

export function App() {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider theme={theme}>
            <RouterProvider router={router} />
          </ChakraProvider>
        </QueryClientProvider>
      </ApolloProvider>
    </>
  );
}
