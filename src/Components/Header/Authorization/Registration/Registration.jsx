import React from "react"
import {Field, reduxForm} from 'redux-form'
import {connect} from "react-redux"
import {authorizationTC} from "./../../../../redux/authorizationReducer"
import {Redirect} from 'react-router-dom'
import "./../authorization.css"

const RegForm = (props) => {
   return (
      <div className="productList">
        <div className="product">
           <form onSubmit={props.handleSubmit}>
               Enter your login
               <Field name="login" type="text" component="input" autoComplete="off" /><br />
               Enter your password
               <Field name="password" type="password" component="input" /><br />
               <span className="error"> {props.authError}</span><br />
               <button>Sign up</button><br /><br />
            </form>
         </div>
      </div>
   )
}


let ReduxLoginForm = reduxForm ({form: 'registration'})(RegForm)


const Registration = (props) => {

   const onSubmit = (formData) =>{
      let data = {
         username: formData.login,
         password: formData.password
      }
      const reg = "registration"
      props.authorizationTC(data, reg)

   }

   if(!props.token){
      return <ReduxLoginForm onSubmit={onSubmit} authError={props.authError}/>
   }
   else return <Redirect to={"/"} />
}


let MapStateToProps = (state) => {
   return {
      token: state.authorizationPage.token,
      authError: state.authorizationPage.authError
   }
}


let MapDispatchToProps = (dispatch) => {
   return {
      authorizationTC: (data, reg) => dispatch(authorizationTC(data, reg))
   }
}

export default connect(MapStateToProps, MapDispatchToProps)(Registration)
