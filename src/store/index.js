import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import artists from "./artists";
import admin from "./admin";

// implementing base for when admin privileges will be added. Must include admin
// ability to provide privileges to others as well....

const reducer = combineReducers({
  admin,
  artists,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;

export * from "./artists";
export * from "./admin";
