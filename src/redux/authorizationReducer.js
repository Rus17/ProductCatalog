import {authorizationAPI} from "./../api/api"

const AUTHORIZATION = "AUTHORIZATION"
const AUTH_ERROR = "AUTH_ERROR"

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


// ------------------------- Thunk Creators  -------------------------
// ----------------- Registration / authorization --------------------
export const authorizationTC = (data, reg) => {
   return (dispatch) => {
      authorizationAPI(data, reg)
      .then((response) => {
         if(response.data.success)dispatch(authorizationAC(response.data.token))
         else dispatch(authErrorAC(response.data.message))
      })
   }
}

export default authorizationReducer
