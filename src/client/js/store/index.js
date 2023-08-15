import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from 'redux-thunk';
import chatReducer from "../reducers/chats";
import authReducer from "../reducers/auth";

function configureStore() {

  const middlewares = [
    thunkMiddleware
  ];

  const store = createStore(
    combineReducers({
      chat: chatReducer,
      auth: authReducer
    }) , 
    applyMiddleware(...middlewares));

  return store;
}

export default configureStore;