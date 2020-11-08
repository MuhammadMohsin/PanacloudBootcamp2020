import React from "react";
import { graphql, useStaticQuery } from "gatsby"

export default function Home() {

  const data = useStaticQuery(graphql`
    query MyQuery {
        allStripePrice {
          edges {
            node {
              product {
                images
                id
                name
                description
              }
              id
              unit_amount
            }
          }
        }
      }
      
    `)
  console.log(data);

  return <div>
    {/* <nav> */}
    <br/>
      <button className="snipcart-checkout">Click here to chekout!</button>
      <div className="snipcart-items-count"></div>
      <div className="snipcart-total-price"></div>
    {/* </nav> */}
    <h1>My Products</h1>
    {
      data.allStripePrice.edges.map(({ node }) => {
        return <div key={node.id}>
          <p><b>{node.product.name}</b></p>
          <p><i>{node.product.description}</i></p>
          <img src={node.product.images[0]} height="100" />
          <br />
          {/* <button>Buy {node.product.name}</button> */}

          <button className="snipcart-add-item"
            data-item-id={node.id}
            data-item-price={node.unit_amount}
            data-item-url="https://goofy-wiles-3a45b8.netlify.app/"
            data-item-description={node.product.description}
            data-item-image={node.product.images[0]}
            data-item-name={node.product.name}>
            Add to cart
          </button>
          < hr />
        </div>
      })
    }
  </div>
}