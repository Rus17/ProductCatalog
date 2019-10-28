import React from "react"
import {NavLink} from "react-router-dom"

const ProductList = (props) => {

   let list = props.productListPage.productList.map((p) => {
      return (
         <div className="item" key={p.id}>
            <NavLink to={`/product/${p.id}`} >
               <h2>{p.title}</h2>
            </NavLink>
         </div>
      )
   })

   return(
      <div>
         {list}
      </div>
   )
}

export default ProductList
