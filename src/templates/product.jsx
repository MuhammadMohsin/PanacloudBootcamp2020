import { Link } from 'gatsby';
import React from 'react'

function Product({ pageContext }) {
    console.log(pageContext);
    return (
        <div className="product-details-container">
            <Link to="/"> Back</Link>
            <h1>{pageContext.title}</h1>
            <img src={pageContext.images[0].originalSrc} alt="product-img" />
            <p>{pageContext.description}</p>
        </div>
    )
}

export default Product
