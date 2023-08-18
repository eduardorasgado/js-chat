import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/auth';
import LoadingView from './shared/LoadingView';

function LoginForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const loginError = useSelector(({auth}) => auth.login.error);
  const isChecking = useSelector(({auth}) => auth.login.isChecking);

  if(isChecking) {
    return <LoadingView message={'Login...'}/>
  }

  const onSubmit = data => {
    dispatch(loginUser(data))
  }
  
  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))} className="centered-container-form">
      <div className="header">Welcome here!</div>
      <div className="subheader">Login and chat with other people!</div>
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            ref={register}
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            ref={register}
            type="password"
            name="password"
            className="form-control"
            id="password" />
        </div>
        {loginError && <div className="alert alert-danger small">{loginError}</div>}
        <button 
          type="submit" className="btn btn-outline-primary">Login</button>
      </div>
    </form>
  );
}

export default LoginForm;