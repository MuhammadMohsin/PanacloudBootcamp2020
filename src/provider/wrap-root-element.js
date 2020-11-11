import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { CartProvider } from 'use-shopping-cart'

const stripePromise = loadStripe("pk_test_51HiczsD31JundhOOfOzrUnsk5pQoJL5aoIexdWFwY49KZT0KLauxkDHW4nYWnwRsWeSmvoUcOjOl54q4Nbz9jWDG00874nnkLN")

export const wrapRootElement = ({ element }) => {
    return (<CartProvider
        mode="client-only"
        stripe={stripePromise}
        successUrl="http://localhost:8888/success"
        cancelUrl="http://localhost:8888/error"
        currency="USD" >
        {element}
    </CartProvider>
    )
}

