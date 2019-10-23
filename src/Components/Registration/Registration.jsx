import React from "react"
import {Field, reduxForm} from 'redux-form'
import {connect} from "react-redux"
import {registrationTC} from "./../../redux/registrationReducer"


const RegForm = (props) => {
   return (
      <div className="productList">
        <div className="product">
           <form onSubmit={props.handleSubmit}>
               Enter your login 
               <Field name="login" type="text" component="input" autoComplete="off" /><br />
               Enter your password 
               <Field name="password" type="password" component="input" /><br />
               <button>Sign up</button><br /><br />
            </form>
         </div>
      </div>
   )
}


let ReduxLoginForm = reduxForm ({form: 'login'})(RegForm)


const Registration = (props) => {
   
   const onSubmit = (formData) =>{
      let data = {
         username: formData.login,
         password: formData.password
      }
      console.log("data", data)
      props.registrationTC(data)
   }
   
   return <ReduxLoginForm onSubmit={onSubmit} />
}



let MapDispatchToProps = (dispatch) => {
   return {
      registrationTC: (data) => dispatch(registrationTC(data))
   }
}

export default connect(null, MapDispatchToProps)(Registration)
