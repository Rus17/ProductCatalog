import {combineReducers, createStore, applyMiddleware} from "redux"
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import productListReducer from "./productListReducer"
import productCommentsReducer from "./productCommentsReducer"
import authorizationReducer from "./authorizationReducer"

let reducers = combineReducers({
   productListPage: productListReducer,
   commentsListPage: productCommentsReducer,
   form: formReducer,
   authorizationPage: authorizationReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store
export default store
