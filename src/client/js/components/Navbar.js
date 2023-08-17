import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../api/auth';
import BackButton from './shared/BackButton';

function Navbar({canGoBack = true}) {

  const dispatch = useDispatch();
  const user = useSelector(({ auth }) => auth.user);

  return (
    <div className="chat-navbar">
      <nav className="chat-navbar-inner">
        <div className="chat-navbar-inner-left">
          { canGoBack && <BackButton /> }
          <Link
            to="/settings"
            className="btn btn-outline-success ml-2">Settings</Link>
        </div>
        <div className="chat-navbar-inner-right">
          {user &&
            <>
              <img
                  src={user.avatar}
                  className='avatar mr-2'
                  alt="Retail Admin" />
              <span className="logged-in-user">Hi {user.username}</span>
              <button
                to="/"
                onClick={() => dispatch(logout())}
                className="btn btn-sm btn-outline-danger ml-4">
                Logout
              </button>
            </>
          }
        </div>
      </nav>
    </div>
  );
}

export default Navbar;