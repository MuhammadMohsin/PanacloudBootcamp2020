import React from 'react';

export default function Fruit({ pageContext }) {

    return <>
        <h1>{pageContext.name}</h1>
        <h3>Description</h3>
        <p>{pageContext.desc}</p>
    </>
}