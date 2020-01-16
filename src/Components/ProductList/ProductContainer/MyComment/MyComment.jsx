import React, {useState}  from "react"
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import starFill from "./../../../../images/starFill.png"
import starStroke from "./../../../../images/starStroke.png"
import {sendMyCommentSagaAC} from "./../../../../redux/productCommentsReducer"
import {TextArea} from './../../../FormsControls/FormsControls'
import {required, minText} from "./../../../../Validators/validators"
import "./myComment.css"

const CommentForm = (props) => {

  let [starsCounter, setStars] = useState(0)

  // --------- Stars after clicking ---------------
   const selectedStars = () => {

      let stars = []

      for (let i = 1; i < 6; i++) {
         if (i <= props.myRate) {
            stars[i] = <img
                           key={i}
                           src={starFill}
                           alt="star"
                           onClick={() => {props.setRate(i)}}
                        />
         } else {
            stars[i] = <img
                           key={i}
                           src={starStroke}
                           alt="star"
                           onClick={() => {props.setRate(i)}}
                        />
         }
      }

      return stars
   }

   // --------- Stars before clicking ---------------
   const showCounter = () => {

      let stars = []

      for (let i = 1; i < 6; i++) {
         if (i <= starsCounter){
            stars[i] = <img
                           src={starFill}
                           key={i}
                           alt="star"
                           onMouseEnter={() => setStars(i)}
                           onMouseLeave={() => setStars(0)}
                           onClick={() => {props.setRate(i)}}
                        />
         } else {
            stars[i] = <img
                           src={starStroke}
                           key={i}
                           alt="star"
                           onMouseEnter={() => setStars(i)}
                           onMouseLeave={() => setStars(0)}
                           onClick={() => {props.setRate(i)}}
                          />
         }
      }

      return stars
   }

   return (
      <form onSubmit={props.handleSubmit} className="item">
         Rate the product<br />
         <div className="star">
            {!props.myRate ? showCounter() : selectedStars() }
         </div>
         <br />
         Write your comment<br />
         <div>
            <Field
               name="text"
               type="textarea"
               component={TextArea}
               validate={[required, minText]}
               rows="10"
               cols="60"
            />
         </div><br />
         <div>
            <button>Publish</button>
         </div>
      </form>
   )
}

const CommentReduxForm = reduxForm ({form: "addComment"}) (CommentForm)

const MyComment = (props) => {

   let [myRate, setRate] = useState(0)
   let [commentMode, setEditMode] = useState(false)

   const onSubmit = (formData) => {

      let data = {
         rate: myRate,
         text: formData.text
      }

      props.sendMyCommentSagaAC(data, props.id, props.token)
      setEditMode(false)
      setRate(0)
   }

   if (!commentMode) return (
                        <button className="button" onClick={() => setEditMode(true)}>
                           Write a review
                        </button>
                     )
   else return <CommentReduxForm onSubmit={onSubmit} myRate={myRate} setRate={setRate}/>
}

let MapDispathToProps = (dispatch) => {
   return {
      sendMyCommentSagaAC: (data, id, token) => dispatch(
        sendMyCommentSagaAC(data, id, token)
      )
  }
}

export default connect (null, MapDispathToProps)(MyComment)
