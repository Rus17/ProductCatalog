import React from "react"
import "./header.css"

const Header = (props) => {
   return (
      <div className="header">
         <p>You are not authorized!</p>
      </div>
//      <div><NavLink to={"/authorization"}>Login</NavLink></div>
//      
//      <div>Glad to see you again!</div>
//      <div onClick={props.logOutTC}>Logout</div>
   )
}

export default Header