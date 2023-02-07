import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

const  reducers= combineReducers({
    amount:amountReducer
//     amount:amountReducer,// For Single Reducer
// SecondReducer:SecondReducer // For Multiple Reducer

})

export default reducers;