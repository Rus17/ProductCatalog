import React from "react"
import "./header.css"
import {NavLink} from "react-router-dom"


const Header = (props) => {
   
   if(!props.token){
   return (
      <div className="header">
         <p>You are not authorized!</p>
         <div><NavLink to={"/authorization"}>Login</NavLink></div> 
      </div>
      )
   }
   
   else return (
      <div className="header">
         <div>Glad to see you again!</div>
         <div onClick={() => {}}>Logout</div>
      </div>      
   )

}

export default Header