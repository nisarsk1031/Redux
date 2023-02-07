// import { createStore } from "redux"
import { applyMiddleware, legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk'
import reducer from "./reducer"

//createStore takes reducers,initial state and middleware
export const store = createStore(reducer,{},applyMiddleware(thunk))