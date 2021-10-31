import React from 'react'
import "../style/ProductReviewsCard.css"

const ProductReviewsCard = ({image,price,name,review,index}) => {
    return (
        <div className="ProductReviewsCard">

            <img src={image} alt={'${index} review'} />
            <h5>{review}</h5>
            <span>{name}</span>
            <b>{price}</b>
            
        </div>
    )
}

export default ProductReviewsCard
