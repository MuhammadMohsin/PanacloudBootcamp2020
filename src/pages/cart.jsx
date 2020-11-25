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
        const token = localStorage.getItem('session')
        if (token) {
            console.log(JSON.parse(localStorage.getItem("session")));
            setSession(JSON.parse(localStorage.getItem("session")));
        }
    }, []);


    if(session && session.lineItems){
        return (
        <Layout>
            {session.lineItems.edges.map(({node}) => <div>
                {console.log(node)}
                <h4>{node.title}</h4>
                {/* <img src={node.variant.image.src} alt="product-img" /> */}
                <br /> <br />
                <button >Checkout</button>
            </div>)}
        </Layout>
    )
            }
            return <h2>loading..</h2>
}

export default Cart
