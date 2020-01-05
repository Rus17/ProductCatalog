import {authorizationAPI} from "./../api/api"
import {call, put, takeEvery} from "redux-saga/effects"

const AUTHORIZATION = "AUTHORIZATION"
const AUTH_ERROR = "AUTH_ERROR"
const AUTHORIZATION_SAGA = "AUTHORIZATION_SAGA"

let initialState = {
   token: "",
   authError: ""
}

const authorizationReducer = (state = initialState, action) => {

   switch(action.type) {
      case AUTHORIZATION:
         return {
            ...state,
            token: action.token
         }
      case AUTH_ERROR:
         return {
            ...state,
            authError: action.message
         }
      default:
         return state;
   }
}


// ------------------------- Action Creators -------------------------
// ----------------- Registration / authorization --------------------
export const authorizationAC = token => {
   return ({ type: AUTHORIZATION, token })
}

// ----------------------- Get error message --------------------------
const authErrorAC = message => {
   return ({ type: AUTH_ERROR, message })
}

// ----------------------- Get saga --------------------------
export const authorizationSagaAC = (data, reg) => {
   return ({ 
      type: AUTHORIZATION_SAGA, 
      data, 
      reg 
   })
}

// ------------------------- Thunk Creators  -------------------------
// ----------------- Registration / authorization --------------------
//export const authorizationTC = (data, reg) => {
//   return (dispatch) => {
//      authorizationAPI(data, reg)
//      .then((response) => {
//         if(response.data.success)dispatch(authorizationAC(response.data.token))
//         else dispatch(authErrorAC(response.data.message))
//      })
//   }
//}

// ------------------------------ Sagas  -------------------------------


function* authorizationSaga(dataAction){
//   console.log("authorizationSaga start 1", dataAction.data, dataAction.reg)
   try{
      const response = yield call(() => {
//         console.log("data, reg", data, reg)
         return authorizationAPI(dataAction.data, dataAction.reg)
      })
      yield put(authorizationAC(response.data.token))
   }
   catch (response){
      put(authErrorAC(response.data.message))
   }
}

export function* watchAuthorizationSaga() {   
   yield takeEvery(AUTHORIZATION_SAGA, authorizationSaga)
}







export default authorizationReducer
