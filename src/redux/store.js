import {combineReducers, createStore, applyMiddleware} from "redux"
//import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import createSagaMiddleware from 'redux-saga'

import productListReducer from "./productListReducer"
import productCommentsReducer from "./productCommentsReducer"
import authorizationReducer from "./authorizationReducer"

import {watchAuthorizationSaga} from "./authorizationReducer"
import {watchGetProductListSaga} from "./productListReducer"


let reducers = combineReducers({
   productListPage: productListReducer,
   commentsListPage: productCommentsReducer,
   form: formReducer,
   authorizationPage: authorizationReducer
})

const sagaMiddleware = createSagaMiddleware()

let store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watchGetProductListSaga)
sagaMiddleware.run(watchAuthorizationSaga)


window.store = store
export default store
