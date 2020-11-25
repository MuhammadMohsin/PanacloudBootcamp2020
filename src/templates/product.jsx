import { Link } from 'gatsby';
import React, { useState, useEffect } from 'react'
import Layout from '../components/layout';
import { gql, useMutation } from '@apollo/client';

const ADD_ITEM_MUTATION = gql`
mutation checkoutLineItemsAdd($lineItems: [CheckoutLineItemInput!]!, $checkoutId: ID!) {
    checkoutLineItemsAdd(lineItems: $lineItems, checkoutId: $checkoutId) {
      checkout {
        id
        webUrl
        totalPrice
        lineItems(first:100){
          edges{
            node{
              quantity
              id
              title,
              variant{
                id
                priceV2{
                  amount
                }
              }
            }
          }
        }
      }
      checkoutUserErrors {
        code
        field
        message
      }
    }
  }
`

function Product({ pageContext }) {

    const [session, setSession] = useState({});
    const [addItem, data] = useMutation(ADD_ITEM_MUTATION);

    useEffect(() => {
        const token = localStorage.getItem('session')
        if (token) {
            setSession(JSON.parse(localStorage.getItem("session")));
        }
    }, []);

    return (
        <Layout>
            <div className="product-details-container">
                <Link to="/"> Back</Link>
                <h1>{pageContext.title}</h1>
                <img src={pageContext.images[0].originalSrc} alt="product-img" />
                <p>{pageContext.description}</p>
                <br /> <br />
                <button onClick={async () => {
                    const res = await addItem({
                        variables: {
                            "lineItems": [
                                {
                                    "quantity": 1,
                                    "variantId": pageContext.variants[0].id.split("_").pop()
                                }
                            ],
                            "checkoutId": session.id
                        }
                    });


                    // console.log(res.data.checkoutLineItemsAdd.checkout);
                    // setSession(newSession);
                    localStorage.setItem("session", JSON.stringify(res.data.checkoutLineItemsAdd.checkout));
                }}>Add to cart</button>
            </div>
        </Layout>
    )
}

export default Product
