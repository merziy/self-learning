import { combineReducers } from "redux";
import notesReducer from "./notesReducer";
import visibilityFilter from "./visibilityFilter";

const reducers = combineReducers({
  notes: notesReducer,
  visibility: visibilityFilter,
});

export default reducers;
