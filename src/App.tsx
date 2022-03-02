import { ApolloProvider } from '@apollo/client';

import client from './client';

import MainPage from './MainPage';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <MainPage />
    </ApolloProvider>
  );
}
