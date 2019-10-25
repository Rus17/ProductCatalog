import React from "react"
import spinner from "./../../images/spinner.svg"
import "./preloader.css"

const Preloader = () => {
  return (
      <div className="preloader">
        <div className="loading">
          Loading ...
        </div>
        <div>
          <img src={spinner} alt="spinner" />
        </div>
      </div>
  )
}

export default Preloader
