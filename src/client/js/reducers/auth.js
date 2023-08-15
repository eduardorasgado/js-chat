const DEFAULT_STATE = {
  user: null,
  isChecking: false
}

function authReducer(state = DEFAULT_STATE, action) {
  switch(action.type) {
    case 'AUTH_ON_INIT':
      console.log('[reducer] on init')
      return {
        user: null,
        isChecking: true
      };
    case 'AUTH_ON_SUCCESS':
      console.log('[reducer] on success')
      return {
        user: action.user, 
        isChecking: false
      }
    case 'AUTH_ON_ERROR':
      console.log('[reducer] on error')
      return DEFAULT_STATE;
    case 'AUTH_LOGOUT_SUCCESS':
      return DEFAULT_STATE;
    default:
      console.log('[reducer] default')
      return state;

  }
}

export default authReducer;