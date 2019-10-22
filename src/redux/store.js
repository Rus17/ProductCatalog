import {combineReducers, createStore, applyMiddleware} from "redux"
import thunkMiddleware from "redux-thunk"
import productListReducer from "./productListReducer"


let reducers = combineReducers({
   productListPage: productListReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store
export default store
