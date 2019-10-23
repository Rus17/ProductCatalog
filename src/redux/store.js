import {combineReducers, createStore, applyMiddleware} from "redux"
import thunkMiddleware from "redux-thunk"
import productListReducer from "./productListReducer"
import productCommentsReducer from "./productCommentsReducer"


let reducers = combineReducers({
   productListPage: productListReducer,
   commentsListPage: productCommentsReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store
export default store
