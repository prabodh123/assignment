import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../app/reducers/index";
import { createLogger } from "redux-logger";

export default createStore(reducers, applyMiddleware(thunk, createLogger()));