import { navigate } from 'gatsby';
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'

function Header() {
    const { cartCount, totalPrice, clearCart } = useShoppingCart();
    return (
        <div className="header-container">
            <p>Total Items: {cartCount}</p>
            <p>Total Price: {totalPrice}</p>
            <button onClick={clearCart}>Clear</button>
            <button onClick={()=>navigate('/cart')}>My Cart</button>
        </div>
    )
}

export default Header
