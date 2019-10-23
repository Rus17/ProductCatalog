import React from "react"
import {connect} from "react-redux"
import ProductComments from "./ProductComments"
import {getProductCommentsTC} from "./../../redux/productCommentsReducer"


import "./../ProductList/productList.css"

class ProductCommentsContainer extends React.Component {

   componentDidMount(props){
      this.props.getProductCommentsTC(this.props.id)
   }


   render(props) {
      return (
         <div>
            {this.props.id} && <ProductComments />
         </div>
      )
   }
}



let MapDispatchToProps = (dispatch) => {
   return {
      getProductCommentsTC: (id) => (dispatch(getProductCommentsTC(id)))
   }
}

export default connect(null, MapDispatchToProps)(ProductCommentsContainer)
