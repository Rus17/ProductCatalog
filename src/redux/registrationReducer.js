import {registrationAPI} from "./../api/api"

const REGISTRATION = "REGISTRATION"

let initialState = {
   registered: false,
   token: ""
}


const registrationReducer = (state = initialState, action) => {

   switch(action.type) {
      case REGISTRATION:
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

const registrationAC = token => {
   return ({ type: REGISTRATION, token })
}


// ------------------------- Thunk Creators  -------------------------
// ------------------------- Registration -------------------------
export const registrationTC = (data) =>{
   return (dispatch) => {
      registrationAPI(data)
      .then((response) => {
         dispatch(registrationAC(response.data.token))
      })
   }
}

export default registrationReducer
