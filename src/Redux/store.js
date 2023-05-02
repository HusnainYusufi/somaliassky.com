import counter from "./Reducer/Counter";
import auth from "./Reducer/Counter";
import myReducer from "./Reducer/StringValues";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter,
  auth,
  myReducer,
});
export default allReducers;
