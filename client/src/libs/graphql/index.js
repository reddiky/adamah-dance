import { ApolloClient, InMemoryCache } from '@apollo/client';


const client = new ApolloClient({
  uri: 'https://localhost:1234',
  cache: new InMemoryCache()
});

export default client;