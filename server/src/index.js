import express from 'express';
import { ApolloServer } from 'apollo-server-express'
import { typeDefs, resolvers } from './utils/apollo/index.js'
const PORT = 1234;
const app = express();

// Allow CORS
app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

// Initialize Apollo Server
const server = new ApolloServer({ typeDefs, resolvers })

server.applyMiddleware({ app })

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});