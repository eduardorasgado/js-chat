import * as api from '../api/auth';

export const registerUser = formData => dispatch =>
  api
    .register(formData)
    .then(_ => dispatch({type: 'AUTH_REGISTER_SUCCESS'}));

export const listenToAuthChanges = () => dispatch => {
  dispatch({type: 'AUTH_ON_INIT'});

  api.onAuthStateChanges(authUser => {
    
    if(authUser) {
      dispatch({
        type: 'AUTH_ON_SUCCESS', 
        user: authUser
      });
      
      console.log("We are authenticated");
    } else {
      dispatch({type: 'AUTH_ON_ERROR'});
      console.log("We are NOT authenticated");
     }
  });
}

export const logout = () => dispatch =>
  api
    .logout()
    .then(_ => dispatch({type: 'AUTH_LOGOUT_SUCCESS'}));