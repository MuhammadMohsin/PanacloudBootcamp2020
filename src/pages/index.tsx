import React from 'react';
import Card from '../components/Card';
import Header from '../components/Header';


const productData = [
    {
        name: 'Mango',
        sku: 'price_1HikPrD31JundhOODJLQQTTL',
        price: 400,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPDGKLovLC8chNl7kh6-ZWHqzkEr5UKWR9XQ&usqp=CAU',
        currency: 'USD'
    },
    {
        name: 'Apples',
        sku: 'price_1HidFHD31JundhOO9MEvwjx9',
        price: 100,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPDGKLovLC8chNl7kh6-ZWHqzkEr5UKWR9XQ&usqp=CAU',
        currency: 'USD'
    }
]

export default function Home() {
    return <div>
        <Header />
        {productData.map(productObj => <Card 
            key={productObj.sku}
            product={productObj} />
        )}
    </div>
}