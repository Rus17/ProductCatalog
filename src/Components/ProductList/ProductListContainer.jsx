import React from "react"
import {connect} from "react-redux"
import {getProductListTC} from "./../../redux/productListReducer"
import ProductList from "./ProductList"
import Preloader from "./../Preloader/Preloader"



class ProductListContainer extends React.Component {

   componentDidMount(props) {
      // this.props.getProductListTC()
   }

   render() {
     if(this.props.productListPage.productList.length === 0) return <Preloader />
      return (
         <ProductList productListPage={this.props.productListPage} />
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
