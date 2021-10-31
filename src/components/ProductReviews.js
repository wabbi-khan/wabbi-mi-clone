import React from 'react'
import ProductReviewsCard from "./ProductReviewsCard.js"
import "../style/ProductReviews.css"
const ProductReviews = ({productReviews}) => {
    return (
        <div className="ProductReviews">
            {
                productReviews.map((item,index)=>(

                    <ProductReviewsCard key={item.image} price={item.price} name={item.name} image={item.image} review={item.review} index={index}  />
                ))
            }
            
        </div>
    )
}

export default ProductReviews
