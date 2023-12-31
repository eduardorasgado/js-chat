import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from 'redux-thunk';
import chatReducer from "../reducers/chats";
import authReducer from "../reducers/auth";
import appReducer from "../reducers/app";

import appMiddleware from './middlewares/app';

function configureStore() {

  const middlewares = [
    thunkMiddleware,
    appMiddleware
  ];

  const store = createStore(
    combineReducers({
      chat: chatReducer,
      auth: authReducer,
      app: appReducer
    }), 
    applyMiddleware(...middlewares));

  return store;
}

export default configureStore;