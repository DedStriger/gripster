import { combineReducers } from "redux";
import { countReducer } from "./countReducer";
import basketReducer from "./basketReducer";

export const rootReducer = combineReducers({
  count: countReducer,
  basket: basketReducer,
});
