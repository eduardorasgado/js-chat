import * as api from '../api/auth';

export const registerUser = formData => dispatch => {
  dispatch({ type: 'AUTH_REGISTER_INIT' });

  return api
    .register(formData)
    .then(() => dispatch({ type: 'AUTH_REGISTER_SUCCESS' }))
    .catch(error => dispatch({ type: 'AUTH_REGISTER_ERROR', error }));
}


export const loginUser = authData => dispatch => {
  dispatch({ type: 'AUTH_LOGOUT_INIT' });

  return api
    .login(authData)
    .then(_ => dispatch({ type: 'AUTH_LOGIN_SUCCESS' }))
    .catch(error => dispatch({ type: 'AUTH_LOGIN_ERROR', error }));
}

export const logout = () => dispatch => {
  // remove if there is no middleware implemented for logout
  dispatch({ type: 'AUTH_LOGIN_INIT' });

  return api
    .logout()
    .then(_ => dispatch({ type: 'AUTH_LOGOUT_SUCCESS' }));
}

export const listenToAuthChanges = () => dispatch => {
  dispatch({ type: 'AUTH_ON_INIT' });

  api.onAuthStateChanges(async authUser => {
    if (authUser) {
      const userProfile = await api.getUserProfile(authUser.uid)

      dispatch({
        type: 'AUTH_ON_SUCCESS',
        //user: { ...authUser, ...userProfile }
        user: userProfile
      });

      console.log("We are authenticated");
    } else {
      dispatch({ type: 'AUTH_ON_ERROR' });
      console.log("We are NOT authenticated");
    }
  });
}