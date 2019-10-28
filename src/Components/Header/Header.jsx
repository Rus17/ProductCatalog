import React from "react"
import "./header.css"
import {NavLink} from "react-router-dom"
import logo from "./../../images/logo.png"

const Header = (props) => {

   return (
     <div className="header">
         <div>
            <NavLink to="/">
               <img src={logo} alt="logo" />
            </NavLink>
         </div>

         {!props.token ? (
            <div className="right" >
                <div>You are not authorized!</div>
                <div><NavLink to={"/authorization"}>Login</NavLink></div>
            </div>
         )
         : (
            <div className="right">
               <div>Glad to see you again!</div>
               <div onClick={() => {props.authorizationAC()}} >
                  <span className="link">
                     Logout
                  </span>
               </div>
            </div>
            )
         }
      </div>
   )
}

export default Header
