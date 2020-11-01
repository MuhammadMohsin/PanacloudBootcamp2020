import React, { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"

export default function Home () {

    const redirectToCheckout = async (event) => {
        event.preventDefault()
        const stripe = await  loadStripe("pk_test_51HiczsD31JundhOOfOzrUnsk5pQoJL5aoIexdWFwY49KZT0KLauxkDHW4nYWnwRsWeSmvoUcOjOl54q4Nbz9jWDG00874nnkLN")
        const { error } = await stripe.redirectToCheckout({
          mode: "payment",
          lineItems: [{ price: "price_1HidBbD31JundhOODC4G1DbR", quantity: 1 }],
          successUrl: `http://localhost:8000/payment-success`,
          cancelUrl: `http://localhost:8000/payment-error`,
        })
        if (error) {
          console.warn("Error:", error)
        }
      }

    return <button onClick={redirectToCheckout}>Buy Laptops</button>
}