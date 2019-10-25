import React from "react"
import {NavLink} from "react-router-dom"
import "./../../ProductList/productList.css"
import {connect} from "react-redux"
import {authorizationTC} from "./../../../redux/authorizationReducer"
import {Field, reduxForm} from 'redux-form'
import {Redirect} from 'react-router-dom'
import "./authorization.css"
import {Input} from './../../FormsControls/FormsControls'
import {required, minInput} from "./../../../Validators/validators"


const AuthForm = (props) => {
   return (
      <div className="productList">
        <div className="product">
           <form onSubmit={props.handleSubmit}>
              Enter your login
               <Field
                  name="login"
                  type="text"
                  component={Input}
                  validate={[required, minInput]} /><br />
               Enter your password
               <Field
                  name="password"
                  type="password"
                  component={Input}
                  validate={[required, minInput]}  /><br />
                Remember me
               <input type="checkbox"/><br />
               <span className="error"> {props.authError}</span><br />
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
      props.authorizationTC(data)
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
      authorizationTC: (data) => dispatch(authorizationTC(data))
   }
}

export default connect(MapStateToProps, MapDispatchToProps)(Authorization)
