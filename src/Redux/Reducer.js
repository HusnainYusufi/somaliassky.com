import counter from "./Reducer/Counter";
import auth from "./Reducer/auth";
import myReducer from "./Reducer/StringValues";
import { combineReducers } from "redux";
import { stringReducer } from "./Reducer/SubId";
const allReducers = combineReducers({
  counter,
  // auth,
  myReducer,
  stringReducer,
});
export default allReducers;
