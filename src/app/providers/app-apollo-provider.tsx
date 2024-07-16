import { ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { PropsWithChildren } from 'react';

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_APOLLO_URI,
});

const authLink = setContext((_, { headers }) => {
  const contentType = 'application/json';
  const xHasuraAdminSecret = import.meta.env.VITE_APOLLO_xHasuraAdminSecret;

  return {
    headers: {
      ...headers,
      'content-type': contentType,
      'x-hasura-admin-secret': xHasuraAdminSecret,
    },
  };
});

const apolloClient = new ApolloClient({
  link: from([authLink, httpLink]),
  cache: new InMemoryCache(),
});

export function AppApolloProvider({ children }: PropsWithChildren) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
