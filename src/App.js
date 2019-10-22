import React from "react"
import {Provider} from "react-redux"
import ProductListContainer from "./Components/ProductList/ProductListContainer"
import Header from "./Components/Header/Header"
import store from "./redux/store.js"
import "./app.css"

const App = () => {
   return(
      <div className="container">
         <Header />
         <ProductListContainer />
      </div>
   )
}

const ProductCatalog = () => {
   return (
         <Provider store={store}>
            <App />
         </Provider>
   )
}
      
export default ProductCatalog