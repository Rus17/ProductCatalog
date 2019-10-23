import {authorizationAPI} from "./../api/api"

const AUTHORIZATION = "AUTHORIZATION"

let initialState = {
   registered: false,
   token: ""
}


const authorizationReducer = (state = initialState, action) => {

   switch(action.type) {
      case AUTHORIZATION:
         return {
            ...state,
            registered: true,
            token: action.token
         }

      default:
         return state;
   }
}

// ------------------------- Action Creators -------------------------
// ------------------------- Registration -------------------------

const authorizationAC = token => {
   return ({ type: AUTHORIZATION, token })
}


// ------------------------- Thunk Creators  -------------------------
// ------------------------- Registration -------------------------
export const authorizationTC = (data) =>{
   return (dispatch) => {
      authorizationAPI(data)
      .then((response) => {
         dispatch(authorizationAC(response.data.token))
      })
   }
}

export default authorizationReducer
