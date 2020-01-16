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


// ------------------------------ Sagas  -------------------------------


function* authorizationSaga(dataAction){
   try{
      const response = yield call(() => {
         return authorizationAPI(dataAction.data, dataAction.reg)
      })
      if(response.data.success){
        yield put(authorizationAC(response.data.token))
        yield put(authErrorAC(""))
      }
      else throw response
   }
   catch (response){
      yield put(authErrorAC(response.data.message))
   }
}

export function* watchAuthorizationSaga() {
   yield takeEvery(AUTHORIZATION_SAGA, authorizationSaga)
}







export default authorizationReducer
