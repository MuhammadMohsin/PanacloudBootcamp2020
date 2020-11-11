import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import Header from '../components/Header'
import './index.css'

function Cart() {

    const { cartDetails, incrementItem, decrementItem,redirectToCheckout } = useShoppingCart()
    const productList = Object.entries(cartDetails);
    return (
        <div>
            <Header />
            {productList.map(objList => <div key={objList[0]} className="card">
                <p>Name: {objList[1].name}</p>
                <p>Price: ${objList[1].price}</p>
                <p><img src={objList[1].image} /></p>
                <button onClick={()=>decrementItem(objList[0])}>-</button>
                <button onClick={()=>incrementItem(objList[0])}>+</button>
            </div>)}
            <br />
            <br />
            <button onClick={redirectToCheckout}>Checkout</button>
        </div>
    )
}

export default Cart
