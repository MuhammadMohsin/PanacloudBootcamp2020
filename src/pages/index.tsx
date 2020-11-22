import { graphql, Link } from 'gatsby';
import React from 'react';
import './styles.css';
import Layout from '../components/layout';

export default function Home({ data }) {

  if (!data && !data.allShopifyProduct)
    return <h1>Loading..</h1>

  return <Layout>
    <div className="container">
      <h1>My Products</h1>
      <ul>
        {data.allShopifyProduct.edges.map(({ node }) => <li key={node.shopifyId}>
          <Link to={`/${node.shopifyId}`}>
            <h3>{node.title}</h3>
            <p>{node.description}</p>
            <p><b>Price:</b> {node.priceRange.minVariantPrice.amount}</p>
          </Link>
        </li>)}
      </ul>
    </div>
  </Layout>
}


export const query = graphql`
  {
    allShopifyProduct(sort: {fields: [title]}) {
      edges {
        node {
          title
          images {
            originalSrc
          }
          shopifyId
          description
          availableForSale
          priceRange {
            maxVariantPrice {
              amount
            }
            minVariantPrice {
              amount
            }
          }
          variants {
            id
          }
        }
      }
    }
  }
`