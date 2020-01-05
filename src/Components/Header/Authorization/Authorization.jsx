import React, {useState} from "react"
import "./authorization.css"
import {connect} from "react-redux"
import {Field, reduxForm} from 'redux-form'
import {Redirect} from 'react-router-dom'
import {authorizationSagaAC} from "./../../../redux/authorizationReducer"
import {Input} from './../../FormsControls/FormsControls'
import {required, minInput} from "./../../../Validators/validators"


const AuthForm = (props) => {

   return (
      <div className="item">
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
                  validate={[required, minInput]}  />
               <span className="error"> {props.authError}</span><br />
               {!props.regMode ? <button>Login</button> : <button>Sign up</button>}<br /><br />
            </form>
            {!props.regMode && <div>You are not registred?
            <button onClick={() => props.setReg(true)}>To register</button></div>}
         </div>
      </div>
   )
}


let ReduxLoginForm = reduxForm ({form: 'login'})(AuthForm)


const Authorization = (props) => {

   let [regMode, setReg] = useState(false)

   const onSubmit = (formData) => {
      let data = {
         username: formData.login,
         password: formData.password
      }
      let reg
      if (regMode) reg = "registration"
      props.authorizationSagaAC(data, reg)
   }

   if (!props.token) {
      return <ReduxLoginForm
               regMode={regMode}
               setReg={setReg}
               onSubmit={onSubmit}
               authError={props.authError}/>
   } else return <Redirect to={"/"} />
}



let MapStateToProps = (state) => {
   return {
      token: state.authorizationPage.token,
      authError: state.authorizationPage.authError
   }
}

let MapDispatchToProps = (dispatch) => {
   return {
      authorizationSagaAC: (data, reg) => dispatch(authorizationSagaAC(data, reg))
   }
}

export default connect(MapStateToProps, MapDispatchToProps)(Authorization)
