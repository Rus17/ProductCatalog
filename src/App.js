import React from "react"
import {Provider, connect} from "react-redux"
import {BrowserRouter, Route} from "react-router-dom"

import ProductListContainer from "./Components/ProductList/ProductListContainer"
import Header from "./Components/Header/Header"
import store from "./redux/store.js"
import "./app.css"
import ProductContainer from "./Components/Product/ProductContainer"
import {getProductListTC} from "./redux/productListReducer"

class AppContainer extends React.Component{

   componentDidMount(props){
      this.props.getProductListTC()
   }

   render(){
      return (
         <div className="container">
            <Header />

            <Route exact path='/' component={ProductListContainer} />
            <Route path='/product/:id' component={ProductContainer} />
         </div>

      )
   }
}



let MapDispatchToProps = (dispatch) => {
   return {
      getProductListTC: () => dispatch(getProductListTC())
   }
}

const AppConnect = connect(null, MapDispatchToProps)(AppContainer)



const ProductCatalog = () => {
   return (
      <BrowserRouter>
         <Provider store={store}>
            <AppConnect />
         </Provider>
      </BrowserRouter>
   )
}

export default ProductCatalog
