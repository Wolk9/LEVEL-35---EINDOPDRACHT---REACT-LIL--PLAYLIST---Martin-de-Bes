// Reducers
import { combineReducers } from "redux";
import songReducer from "./songReducer";

const allReducers = combineReducers({
  song: songReducer
});

export default allReducers;
