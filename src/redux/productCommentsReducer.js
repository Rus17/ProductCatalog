import {getProductCommentsAPI, sendMyCommentAPI} from "./../api/api"

const GET_PRODUCT_COMMENTS = "GET_PRODUCT_COMMENTS"

let initialState = {
   commentsList: []
}


const productListReducer = (state = initialState, action) => {

   switch(action.type) {
      case GET_PRODUCT_COMMENTS:
         return {
            ...state,
            commentsList: action.data
         }

        default:
         return state;
   }
}

// ------------------------- Action Creators -------------------------
// ------------------------- Get Comments -------------------------

export const getProductCommentsAC = data => {
   return ({ type: GET_PRODUCT_COMMENTS, data })
}


// ------------------------- Thunk Creators  -------------------------
// ------------------------- Get Comments -------------------------
export const getProductCommentsTC = (id) => {
   return (dispatch) => {
      getProductCommentsAPI(id)
      .then((response) => {
         dispatch(getProductCommentsAC(response.data))
      })
   }
}

// ------------------------- Send My Comment -------------------------
export const sendMyCommentTC = (data, id, token) => {
   return (dispatch) => {
      sendMyCommentAPI(data, id, token)
      .then((response) => {
         dispatch(getProductCommentsTC(id))
      })
   }
}

export default productListReducer
