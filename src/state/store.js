import { applyMiddleware,createStore } from "redux";
import thunk from 'redux-thunk'
import reducer from './reducers/index.js'

export const store=createStore(reducer,{},applyMiddleware(thunk));

