import React, { useState } from 'react'
import { useEffect } from 'react';
import './styles.css'
import { navigate } from 'gatsby';
import { gql, useMutation } from '@apollo/client'

const CHECKOUT_MUTATION = gql`
mutation checkoutCreate($data: CheckoutCreateInput!) {
    checkoutCreate(input: $data) {
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


function Layout({ children }) {

    const [session, setSession] = useState({});
    const [setCheckout, { data: checkoutCreate }] = useMutation(CHECKOUT_MUTATION);

    useEffect(() => {
        const token = localStorage.getItem('session')
        if (!token) {
            (async () => {
                const checkoutToken = await setCheckout({
                    variables: {
                        data: {}
                    }
                });
                // setSession(checkoutToken);
                console.log(checkoutToken);
                localStorage.setItem("session", JSON.stringify(checkoutToken.data.checkoutCreate.checkout))
                setSession(checkoutToken.data.checkoutCreate.checkout)
            })()
        }
        else {
            setSession(JSON.parse(localStorage.getItem("session")));
            console.log(JSON.parse(localStorage.getItem("session")));
        }
    }, []);

    console.log(session)
    return (
        <div>
            <nav className="nav-container">
                <span>Total: {session.totalPrice}</span>
                <button onClick={() => navigate("/cart")}>Cart</button>
                <button onClick={() => {
                    window.open(session.webUrl)
                }}>Checkout</button>

            </nav>
            <div className="children">
                {children}
            </div>
        </div>
    )
}

export default Layout
