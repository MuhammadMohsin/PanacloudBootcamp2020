import React from 'react';
import { Link } from 'react-router-dom';
import Shoes from './../shoes.json';

function Product() {

    return (
        <div>
            <h1>Welcome to Product</h1>
            <div className="productContainer">
                {Object.keys(Shoes).map(keyName=>{
                    const shoe = Shoes[keyName];
                    return (
                        <Link key={keyName} 
                            className="link" 
                            to={`/product/${keyName}`}>
                                <h4>{shoe.name}</h4>
                                <img src={shoe.img} height={150} alt="shoe" />
                    </Link>)
                })}
            </div>
        </div>
    );
}

export default Product;
