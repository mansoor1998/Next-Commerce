// lib/apollo-client.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const createApolloClient = () => {
  return new ApolloClient({
    uri: 'https://39e33d-3.myshopify.com/admin/api/2024-01/graphql.json',
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": "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"
    },
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
