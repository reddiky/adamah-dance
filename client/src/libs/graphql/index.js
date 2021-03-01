import { ApolloClient, InMemoryCache } from '@apollo/client';


const client = new ApolloClient({
  uri: process.env.NODE_ENV === 'production' ? 'https://reddiky.wtf/graphql' : 'http://localhost:1234/graphql',
  cache: new InMemoryCache()
});

export default client;
