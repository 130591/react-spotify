import { combineReducers } from "redux";

import Home from "./home";
import playlist from "./playlist";

const reducers = combineReducers({
  Home,
  playlist
});

export default reducers;
