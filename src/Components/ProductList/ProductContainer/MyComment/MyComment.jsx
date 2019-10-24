import React, {useState}  from "react"
import {Field, reduxForm} from 'redux-form'
import starFill from "./../../../../images/starFill.png"
import starStroke from "./../../../../images/starStroke.png"
import "./../ProductComments/productComments.css"

const CommentForm = (props) => {

   // const selectedStars = () => {
   //    let stars = []
   //    for(var i = 0; i < 5; i++){
   //       // if(i < props.rate) stars[i] = <img key={i} src={starFill} alt="star"/>
   //       stars[i] = <img key={i} src={starStroke} alt="star"/>
   //    }
   //    return stars
   // }

   // const handrlerOver = (e) => {
   //    e.target.src = starFill
   // }
   //
   // const handrlerLeave = (e) => {
   //    e.target.src = starStroke
   // }

   const starsCounter = () => {
      let stars = []
      for(var i = 1; i < 6; i++){

         stars[i] = <img
                        src={starStroke}
                        key={i}
                        alt="star"
                        onMouseEnter={(e) => e.target.src = starFill}
                        onMouseLeave={(e) => e.target.src = starStroke}
                        onClick={() => {}} />
      }
      return stars
   }



   return (
      <form onSubmit={props.handleSubmit} className="comment">
         Rate the product<br />
         <div>
            {starsCounter()}
         </div>
         <br />
         Write your comment<br />
         <Field name="text" type="textarea" component="textarea" /><br />
         <div>
            <button>Publish</button>
         </div>
      </form>
   )
}

const CommentReduxForm = reduxForm ({form: "addComment"}) (CommentForm)


const MyComment = (props) => {

   let [commentMode, setEditMode] = useState(false)

   const onSubmit = (formData) =>{
      let data = {
         rate: formData.rate,
         text: formData.text
      }
   }

   if(!commentMode) return <button onClick={() => setEditMode(true)}>Write a review</button>
   else return <CommentReduxForm onSubmit={onSubmit}/>
}

export default MyComment
