import {combineReducers, createStore, applyMiddleware} from "redux"
import thunkMiddleware from "redux-thunk"
import productListReducer from "./productListReducer"
import productCommentsReducer from "./productCommentsReducer"
import {reducer as formReducer} from "redux-form"
// import registrationReducer from "./registrationReducer"
import authorizationReducer from "./authorizationReducer"


let reducers = combineReducers({
   productListPage: productListReducer,
   commentsListPage: productCommentsReducer,
   form: formReducer,
   // registrationPage: registrationReducer,
   authorizationPage: authorizationReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store
export default store
