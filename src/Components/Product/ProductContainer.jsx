import React from "react"
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {server} from "./../../api/api"
import ProductInfo from "./ProductInfo"
import ProductCommentsContainer from "./ProductCommentsContainer"

const ProductContainer = (props) => {

   const showProduct = props.productList.filter((p) => {
         return (p.id == props.match.params.id)
   })

   return (
      <div  className="productList">
         <ProductInfo showProduct={showProduct[0]} server={server} />
         <ProductCommentsContainer id={props.match.params.id}/>
      </div>
   )
}



const WithUrlProduct = withRouter(ProductContainer)


let MapStateToProps = (state) => {
   return {
      productList: state.productListPage.productList
   }
}

export default connect(MapStateToProps, null)(WithUrlProduct)
