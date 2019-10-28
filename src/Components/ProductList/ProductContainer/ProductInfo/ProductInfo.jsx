import React from "react"

import "./../../../ProductList/productList.css"

const ProductInfo = (props) => {
   
   if (props.showProduct) {      
      return (
         <div className="product">
            <h2>{props.showProduct.title}</h2>
            <img src={`${props.server}/static/${props.showProduct.img}`} alt="product"/>
            <h2>Description</h2>
            <div>{props.showProduct.text}</div>
         </div>
      )
   } else return null
}

export default ProductInfo
