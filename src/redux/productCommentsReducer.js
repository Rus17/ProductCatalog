import {getProductCommentsAPI, sendMyCommentAPI} from "./../api/api"
import {put, call, takeEvery} from "redux-saga/effects"

const GET_PRODUCT_COMMENTS = "GET_PRODUCT_COMMENTS"
const GET_PRODUCT_COMMENTS_SAGA = "GET_PRODUCT_COMMENTS_SAGA"
const SEND_MY_COMMENT_SAGA = "SEND_MY_COMMENT_SAGA"

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

export const getProductCommentsSagaAC = (id) => {
  return({type: GET_PRODUCT_COMMENTS_SAGA, id})
}

export const sendMyCommentSagaAC = (data, id, token) => {
  return({type: SEND_MY_COMMENT_SAGA, data, id, token})
}



// ------------------------------ Sagas  -----------------------------
// ------------------------- Get Comments -------------------------
function* getProductCommentsSaga(dataAction) {
  try{
    const response = yield call(() => {
      return getProductCommentsAPI(dataAction.id)
    })
    yield put(getProductCommentsAC(response.data))
  }
  catch(e) {
    console.log(e, "failure")
  }
}

export function* watchgetProductCommentsSaga(){
  yield takeEvery(GET_PRODUCT_COMMENTS_SAGA, getProductCommentsSaga)
}

// ------------------------- Send My Comment -------------------------
function* sendMyCommentSaga(dataAction){
  try{
    const response = yield call(() => {
      return sendMyCommentAPI(dataAction.data, dataAction.id, dataAction.token)
    })
    if(response.data.success){
      yield put(getProductCommentsSagaAC(dataAction.id))
    }
    else throw response
  }
  catch(response){
    console.log(response.data.message)
  }
}

export function* watchSendMyCommentSaga(){
  yield takeEvery(SEND_MY_COMMENT_SAGA, sendMyCommentSaga)
}

export default productListReducer
