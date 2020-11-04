import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const promise = loadStripe("pk_test_51HiczsD31JundhOOfOzrUnsk5pQoJL5aoIexdWFwY49KZT0KLauxkDHW4nYWnwRsWeSmvoUcOjOl54q4Nbz9jWDG00874nnkLN");

export default function Home() {
    return <div>
        <Elements stripe={promise}>
            <CheckoutForm />
        </Elements>
    </div>
}