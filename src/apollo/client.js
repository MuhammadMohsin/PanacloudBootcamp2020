import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://mohsinstoretest.myshopify.com/api/graphql',
    fetch,
    headers: {
        "X-Shopify-Storefront-Access-Token": "aeddad8c96dd3d914e4dc93aa27d89db" 
    }
  }),
  cache: new InMemoryCache()
});