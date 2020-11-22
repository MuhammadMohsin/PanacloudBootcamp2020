import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import Client from 'shopify-buy';

const client = Client.buildClient({
    domain: "mohsinstoretest.myshopify.com",
    storefrontAccessToken: "aeddad8c96dd3d914e4dc93aa27d89db"
});
function Cart() {

    const [session, setSession] = useState({})
    useEffect(() => {
        (async () => {
            const token = await client.checkout.fetch(
                localStorage.getItem("session")
            )
            setSession(token);
            console.log(token);
            console.log(token.lineItems);
        })()
    }, []);


    if(session && session.lineItems){
        return (
        <Layout>
            {session.lineItems.map(item => <div>
                {console.log(item)}
                <h1>{item.title}</h1>
                <img src={item.variant.image.src} alt="product-img" />
                <br /> <br />
                <button >Checkout</button>
            </div>)}
        </Layout>
    )
            }
            return <h2>loading..</h2>
}

export default Cart
