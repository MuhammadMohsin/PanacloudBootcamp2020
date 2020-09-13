import React from 'react';
import Button from '../components/button';

export default {
    title: "Button",
    component: Button
}

export const BtnLg = () => (
    <Button value={"Button Large"}
        style={{ padding: '10px 100px', backgroundColor: 'blue' }}
        onClick={() => alert("Clicked!")} />
)

export const BtnMd = () => (
    <Button value={"Button Medium"}
        style={{ padding: '10px 50px', backgroundColor: 'darkcyan' }}
        onClick={() => alert("Clicked!")} />
)

export const BtnSm = () => (
    <Button value={"Button Small"}
        style={{ padding: '10px 5px', backgroundColor: 'darkcyan' }}
        onClick={() => alert("Clicked!")} />
) 