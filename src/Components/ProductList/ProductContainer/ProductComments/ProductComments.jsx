import React from "react"
import "./productComments.css"
import starFill from "./../../../../images/starFill.png"
import starStroke from "./../../../../images/starStroke.png"

const Rating = (props) => {
   
   const starsCounter = () => {
      
      let stars = []
      
      for (var i = 0; i < 5; i++){
         if (i < props.rate) stars[i] = <img key={i} src={starFill} alt="star"/>
         else stars[i] = <img key={i} src={starStroke} alt="star"/>
      }
      
      return stars
   }

   return (
      <div className="star">
         {starsCounter()}
      </div>
   )
}


const ProductComments = (props) => {

   const showComments = props.commentsList.map((c) => {
         
      return (
         <div key={c.id} className="item">
            <h2>{c.created_by.username}</h2>
            <div>
               <Rating rate={c.rate} /><br />
            </div>
            <div>
               {c.text}
            </div>
            <div className="date">
               {c.created_at}
            </div>
         </div>
      )
   })

   return (
      <div>
         <h2 className="button">Comments</h2>
         {showComments}
      </div>
   )
}

export default ProductComments
