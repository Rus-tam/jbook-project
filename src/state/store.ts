import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { ActionTypes } from "./action-types";

export const store = createStore(reducers, {}, applyMiddleware(thunk));

store.dispatch({
  type: ActionTypes.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: "code",
  },
});
store.dispatch({
  type: ActionTypes.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: "text",
  },
});
//
// console.log(store.getState());
