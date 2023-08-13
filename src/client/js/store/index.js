import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from 'redux-thunk';
import chatReducer from "../reducers/chats";

function configureStore() {

  const middlewares = [
    thunkMiddleware
  ];

  const store = createStore(
    combineReducers({
      chat: chatReducer
    }) , 
    applyMiddleware(...middlewares));

  return store;
}

export default configureStore;