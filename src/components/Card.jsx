import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import '../pages/index.css'

function Card({ product }) {
    const {addItem} = useShoppingCart()
    return (<div className="card">
        <p>Name: {product.name}</p>
        <p>Price: ${product.price}</p>
        <p><img src={product.image} /></p>
        <button onClick={()=>addItem(product)}>Add to cart</button>
    </div>
    )
}

export default Card
