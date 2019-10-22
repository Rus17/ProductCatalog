import React from "react"
import {connect} from "react-redux"
import {getProductListTC} from "./../../redux/productListReducer"
import ProductList from "./ProductList"
import {server} from "./../../api/api"


class ProductListContainer extends React.Component {
   
   componentDidMount(props) {
      this.props.getProductListTC()
   }
   
   render() {
      return (
         <ProductList productListPage={this.props.productListPage} server={server}/>
      
      )
   }
   
   
}

let MapStateToProps = (state) => {
   return {
      productListPage: state.productListPage
   }
}

let MapDispatchToProps = (dispatch) => {
   return {
      getProductListTC: () => {dispatch(getProductListTC())}
   }
}

export default connect (MapStateToProps, MapDispatchToProps)(ProductListContainer)