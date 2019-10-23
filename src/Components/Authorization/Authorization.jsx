import React from "react"
import {NavLink} from "react-router-dom"
import "./../ProductList/productList.css"
import {connect} from "react-redux"
import {authorizationTC} from "./../../redux/authorizationReducer"
import {Field, reduxForm} from 'redux-form'

const AuthForm = (props) => {
   return (
      <div className="productList">
        <div className="product">
           <form onSubmit={props.handleSubmit}>
              Enter your login 
               <Field name="login" type="text" component="input" autoComplete="off" /><br />
               Enter your password 
               <Field name="password" type="password" component="input" /><br />
                Remember me
               <input type="checkbox"/><br />
               <button>Login</button><br /><br />              
            </form>
            <NavLink to="/Registration">To register</NavLink>
         </div>
      </div>
   )
}


let ReduxLoginForm = reduxForm ({form: 'login'})(AuthForm)


const Authorization = (props) => {
   
   const onSubmit = (formData) =>{
      let data = {
         username: formData.login,
         password: formData.password
      }
      console.log("data", data)
      props.authorizationTC(data)
   }
   
   return <ReduxLoginForm onSubmit={onSubmit} />
}



let MapDispatchToProps = (dispatch) => {
   return {
      authorizationTC: (data) => dispatch(authorizationTC(data))
   }
}

export default connect(null, MapDispatchToProps)(Authorization)


