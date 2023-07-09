import cellsReducer from "./cellsReducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
  cells: cellsReducer,
});

export default reducer;

export type RootState = ReturnType<typeof reducer>;
