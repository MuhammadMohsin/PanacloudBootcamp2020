import React from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from '../component/layout'

export default function Product({pageContext}){

    const {itemDetails} = pageContext
    return <Layout>
        <h1>{itemDetails.title}</h1>
        <p>{documentToReactComponents(itemDetails.desc.json)}</p>
    </Layout>
}