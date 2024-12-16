import { legacy_createStore as createStore } from "redux";
import { counterReducer } from "./counter/counterReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(counterReducer, composeWithDevTools())
