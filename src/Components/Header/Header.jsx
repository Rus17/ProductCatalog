import React from "react"
import "./header.css"
import {NavLink} from "react-router-dom"


const Header = (props) => {
   console.log("props", props)
   if(!props.token){
   return (
      <div className="header">
         <div>You are not authorized!</div>
         <div><NavLink to={"/authorization"}>Login</NavLink></div>
      </div>
      )
   }

   else return (
      <div className="header">
         <div>Glad to see you again!</div>
         <div onClick={() => {props.authorizationAC()}} >
            <span className="link">
               Logout
            </span>
         </div>
      </div>
   )

}

export default Header
