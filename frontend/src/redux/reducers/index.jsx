import { combineReducers } from "redux";
import authReducer from "../reducers/auth";
import restReducer from "./restaurants";
import dishReducer from "./dishes";
import orderReducer from "./orders";


const rootReducer = combineReducers({
  authReducer,
 rest: restReducer, 
 dish: dishReducer,
order: orderReducer });

  export default rootReducer;
