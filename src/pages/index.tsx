import { graphql, Link } from 'gatsby';
import React from 'react';
import './styles.css';

export default function Home({ data }) {

    if (!data && !data.allShopifyProduct)
        return <h1>Loading..</h1>

    return <div className="container">
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
}


export const query = graphql`
  {
    allShopifyProduct(sort: { fields: [title] }) {
      edges {
        node {
          title
          shopifyId
          description
          handle
          priceRange {
            minVariantPrice {
              amount
            }
          }
        }
      }
    }
  }
`