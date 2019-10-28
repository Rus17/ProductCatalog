import {getProductListAPI} from "./../api/api"

const GET_PRODUCT_LIST = "GET_PRODUCT_LIST"

let initialState = {
   productList: []
}

const productListReducer = (state = initialState, action) => {

   switch(action.type) {
      case GET_PRODUCT_LIST:
         return {
            ...state,
            productList: action.data
         }
      default:
         return state;
   }
}

// ------------------------- Action Creators -------------------------
// ------------------------- Get Product List -------------------------
export const getProductListAC = data => {
   return ({ type: GET_PRODUCT_LIST, data })
}


// ------------------------- Thunk Creators  -------------------------
// ------------------------- Get Product List -------------------------
export const getProductListTC = () =>{
   return (dispatch) => {
      getProductListAPI()
      .then((response) => {
         dispatch(getProductListAC(response.data))
      })
   }
}

export default productListReducer
