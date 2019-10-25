import React from "react"
import Header from "./Header"
import {connect} from "react-redux"
import {authorizationAC} from "../../redux/authorizationReducer"

const HeaderContainer = (props) => {
   return <Header token={props.token} authorizationAC={props.authorizationAC}/>
}



let MapStateToProps = (state) => {
   return {
      token: state.authorizationPage.token
   }
}

let MapDispatchToProps = (dispatch) => {
   return {
      authorizationAC: () => dispatch(authorizationAC(""))
   }
}

export default connect(MapStateToProps, MapDispatchToProps)(HeaderContainer)
