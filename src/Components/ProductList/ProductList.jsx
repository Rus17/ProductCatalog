import React from "react"
import "./productList.css"
import {NavLink} from "react-router-dom"

const ProductList = (props) => {

   let list = props.productListPage.productList.map((p) => {
      return (
         <NavLink to={`/product/${p.id}`} className="product" key={p.id}>
               <h2>{p.title}</h2>
         </NavLink>
      )
   })

   return(
      <div className="productList">
         {list}
      </div>
   )
}

export default ProductList
