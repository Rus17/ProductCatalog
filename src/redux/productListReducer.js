import {getProductListAPI} from "./../api/api"
import { takeEvery, put, call } from "redux-saga/effects"

const GET_PRODUCT_LIST = "GET_PRODUCT_LIST"
const GET_PRODUCT_LIST_SAGA = "GET_PRODUCT_LIST_SAGA"

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

export const getProductListForSaga = () => {
   return ({ type: GET_PRODUCT_LIST_SAGA })
}


// ------------------------------ Sagas  -------------------------------
// ------------------------- Get Product List ------------------------
function* getProductListSaga() {
   try {
      const response = yield call(() => {return getProductListAPI()})
      yield put(getProductListAC(response.data))
    }
   catch(e){
     console.log(e, "failure")
   }
}

export function* watchGetProductListSaga() {
   yield takeEvery(GET_PRODUCT_LIST_SAGA, getProductListSaga)
}



export default productListReducer
