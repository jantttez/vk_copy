import { firebaseConfig } from '@app/firebase';
import { initializeApp } from 'firebase/app';

import {
  AppApolloProvider,
  AppChakraUIProvider,
  AppQueryClientProvider,
  AppRouter,
} from './providers';

export const app = initializeApp(firebaseConfig);

export function App() {
  return (
    <>
      <AppApolloProvider>
        <AppQueryClientProvider>
          <AppChakraUIProvider>
            <AppRouter />
          </AppChakraUIProvider>
        </AppQueryClientProvider>
      </AppApolloProvider>
    </>
  );
}
