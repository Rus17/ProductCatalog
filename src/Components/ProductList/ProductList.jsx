import React from "react"
import "./productList.css"

const ProductList = (props) => {
   let list = props.productListPage.productList.map((p) => {
      return (
         <div className="product" key={p.id}>
            <h2>{p.title}</h2>
            <img src={`${props.server}/static/${p.img}`} alt="product"/>
            <div>{p.text}</div>
         </div>
      )
   })
   
   return(
      <div className="productList">
         {list}
      </div>
      
   )
}













export default ProductList