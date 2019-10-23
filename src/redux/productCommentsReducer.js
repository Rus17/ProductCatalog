import {getProductCommentsAPI} from "./../api/api"

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
// ------------------------- Get Product List -------------------------

export const getProductCommentsAC = data => {
   return ({ type: GET_PRODUCT_COMMENTS, data })
}


// ------------------------- Thunk Creators  -------------------------
// ------------------------- Get Product List -------------------------
export const getProductCommentsTC = () =>{
   return (dispatch) => {
      getProductCommentsAPI()
      .then((response) => {
         dispatch(getProductCommentsAC(response.data))
      })
   }
}

export default productListReducer
