import myReducer from "./reducer";
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools({});
export const store = createStore(
	myReducer,
	composeEnhancers() // you can leave this as it is if no middleware
);
 