import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import client from './libs/graphql';

// Add Apollo
const WrappedApp = () => 
  (<ApolloProvider client={client}>
    <App/>
  </ApolloProvider>)

// Render the App
ReactDOM.render(
  <React.StrictMode>
    <WrappedApp />
  </React.StrictMode>,
  document.getElementById('root')
);

