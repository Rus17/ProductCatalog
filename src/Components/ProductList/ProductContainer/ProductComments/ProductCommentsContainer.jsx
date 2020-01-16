import React from "react"
import {connect} from "react-redux"
import ProductComments from "./ProductComments"
import {getProductCommentsSagaAC} from "./../../../../redux/productCommentsReducer"
import Preloader from "./../../../Preloader/Preloader"

class ProductCommentsContainer extends React.Component {

  componentDidMount(props) {
    this.props.getProductCommentsSagaAC(this.props.id)
  }


  render(props) {

    if(this.props.commentsList.length === 0) return <Preloader />

    return (
      <div>
      {this.props.id && <ProductComments commentsList={this.props.commentsList} />}
      </div>
    )
  }
}

let MapStateToProps = (state) => {
  return {
    commentsList: state.commentsListPage.commentsList
  }
}

let MapDispatchToProps = (dispatch) => {
  return {
    getProductCommentsSagaAC: (id) => (dispatch(getProductCommentsSagaAC(id)))
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(ProductCommentsContainer)
