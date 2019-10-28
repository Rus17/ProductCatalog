import React from "react"
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {server} from "./../../../api/api"
import ProductInfo from "./ProductInfo/ProductInfo"
import ProductCommentsContainer from "./ProductComments/ProductCommentsContainer"
import MyComment from "./MyComment/MyComment"

const ProductContainer = (props) => {

   const showProduct = props.productList.filter((p) => {
      return (p.id == props.match.params.id)
   })

   return (
      <div  className="productList">
         <ProductInfo showProduct={showProduct[0]} server={server} />
         {props.token && <MyComment id={props.match.params.id} token={props.token} />}
         <ProductCommentsContainer id={props.match.params.id} />
      </div>
   )
}

const WithUrlProduct = withRouter(ProductContainer)

let MapStateToProps = (state) => {
   return {
      productList: state.productListPage.productList,
      token: state.authorizationPage.token
   }
}

export default connect(MapStateToProps, null)(WithUrlProduct)
