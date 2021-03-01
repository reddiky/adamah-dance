import { ApolloClient, InMemoryCache } from '@apollo/client';


const client = new ApolloClient({
  uri: process.env.PROD ? 'http://localhost:1234/graphql' : 'http://localhost:1234/graphql',
  cache: new InMemoryCache()
});

export default client;
