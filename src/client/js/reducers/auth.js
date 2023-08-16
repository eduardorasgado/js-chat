import { combineReducers } from "redux"

function createAuthReducer() {
  const user =  (state = null, action) => {
    switch(action.type) {
      case 'AUTH_ON_INIT':
      case 'AUTH_ON_ERROR':
        return null;

      case 'AUTH_ON_SUCCESS':
        console.log('[user reducer]auth on success');
        return action.user;

      default:
        console.log('[user reducer] default');
        return state;
    }
  }

  const isChecking = (state = false, action) => {
    switch(action.type) {
      case 'AUTH_ON_INIT':
        console.log('[reducer] on init');
      case 'AUTH_REGISTER_INIT':
        console.log('[reducer] auth register init');
      case 'AUTH_LOGIN_INIT':
        console.log('[reducer] auth login init');
        return true;
  
      case 'AUTH_ON_SUCCESS':
        console.log('[isChecking reducer] auth on success');
      case 'AUTH_ON_ERROR':
        console.log('[isChecking reducer] auth on error');
      case 'AUTH_LOGOUT_SUCCESS':
        console.log('[isChecking reducer] auth logout success');
        return false;

      default:
        console.log('[isChecking reducer] default')
        return state;
    }
  }

  return combineReducers({
    user, 
    isChecking
  });
}

export default createAuthReducer();