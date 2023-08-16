import { combineReducers } from "redux"
import { createErrorReducer } from "./shared";

function createLoginReducer() {
  return combineReducers({ error: createErrorReducer('AUTH_LOGIN') });
}

function createRegisterReducer() {
  return combineReducers({ error: createErrorReducer('AUTH_REGISTER') });
}

function createAuthReducer() {
  const user =  (state = null, action) => {
    switch(action.type) {
      case 'AUTH_ON_INIT':
      case 'AUTH_ON_ERROR':
        return null;

      case 'AUTH_ON_SUCCESS':
        return action.user;

      default:
        return state;
    }
  }

  const isChecking = (state = false, action) => {
    switch(action.type) {
      case 'AUTH_ON_INIT':
      case 'AUTH_REGISTER_INIT':
      case 'AUTH_LOGIN_INIT':
        return true;
  
      case 'AUTH_ON_SUCCESS':
      case 'AUTH_ON_ERROR':
      case 'AUTH_LOGOUT_SUCCESS':
      case 'AUTH_LOGIN_ERROR':
      case 'AUTH_REGISTER_ERROR':
        return false;

      default:
        return state;
    }
  }

  return combineReducers({
    user, 
    isChecking,
    login: createLoginReducer(),
    register: createRegisterReducer()
  });
}

export default createAuthReducer();