import React, { useState } from 'react';
import { useSelector } from 'react-redux';;
import { Redirect } from 'react-router-dom'
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

function Welcome() {
  const [isLoginView, setIsLogin] = useState(true);

  const user = useSelector(({auth}) => auth.user);
  
  if(user) {
    return <Redirect to="/home"/>
  }

  const optInText = !isLoginView 
    ? ['Already registered?', 'Login'] 
    : ['Need an account?', 'Register'];

  return (
    <div className="centered-view">
      <div className="centered-container">

        { isLoginView ? <LoginForm /> : <RegisterForm /> }

        <small className="form-text text-muted mt-2">{optInText[0]}
          <span
            onClick={() => { setIsLogin(!isLoginView) }}
            className="btn-link ml-2">{optInText[1]}</span></small>
      </div>
    </div>
  )
}

export default Welcome;