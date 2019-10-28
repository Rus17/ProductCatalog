import React from "react"

const ProductInfo = (props) => {
   
   if (props.showProduct) {      
      return (
         <div className="item">
            <h2>{props.showProduct.title}</h2>
            <img src={`${props.server}/static/${props.showProduct.img}`} alt="product"/>
            <h2>Description</h2>
            <div>{props.showProduct.text}</div>
         </div>
      )
   } else return null
}

export default ProductInfo
