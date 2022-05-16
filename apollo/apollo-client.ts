import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://wainwrights-tick-list.vercel.app/api/graphql',
  cache: new InMemoryCache(),
});

export default client;
