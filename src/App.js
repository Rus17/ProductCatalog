import React from "react"
import {Provider, connect} from "react-redux"
import {BrowserRouter, Route} from "react-router-dom"
import ProductListContainer from "./Components/ProductList/ProductListContainer"
import HeaderContainer from "./Components/Header/HeaderContainer"
import store from "./redux/store.js"
import ProductContainer from "./Components/ProductList/ProductContainer/ProductContainer"
import {getProductListTC} from "./redux/productListReducer"
import Authorization from "./Components/Header/Authorization/Authorization"

class AppContainer extends React.Component {

   componentDidMount(props) {
      this.props.getProductListTC()
   }

   render() {
      return (
         <div className="container">
            <HeaderContainer />
            <Route exact path='/' component={ProductListContainer} />
            <Route path='/product/:id' component={ProductContainer} />
            <Route path='/authorization' component={Authorization} />
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
