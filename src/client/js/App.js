import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import HomeView from './views/Home'
import WelcomeView from './views/Welcome';
import SettingsView from './views/Settings';
import ChatView from './views/Chat';
import { listenToAuthChanges } from './actions/auth';
import StoreProvider from './store/StoreProvider';
import LoadingView from './components/shared/LoadingView';

function AuthRoute({ children, ...rest }) {
  const user = useSelector(({ auth }) => auth.user);
  const onlyChild = React.Children.only(children);

  return (
    <Route
      {...rest}
      render={props => 
        user 
          ? React.cloneElement(onlyChild, { ...rest, ...props }) 
          : <Redirect to='/' />
      } />
  );
}

const ContentWrapper = ({ children }) => {
  return (
    <div className='content-wrapper'>
      {children}
    </div>
  )
}

function ChatApp() {
  const dispatch = useDispatch();

  const isChecking = useSelector(({ auth }) => auth.isChecking);

  useEffect(() => {
    dispatch(listenToAuthChanges());
  }, [dispatch]);

  if (isChecking) {
    return <LoadingView message={'Loading...'} />
  }

  return (
    <Router>
      <ContentWrapper>
        <Switch>
          <Route path="/" exact>
            <WelcomeView />
          </Route>
          <AuthRoute path="/home">
            <HomeView />
          </AuthRoute>
          <AuthRoute path="/chat/:id">
            <ChatView />
          </AuthRoute>
          <AuthRoute path="/settings">
            <SettingsView />
          </AuthRoute>
        </Switch>
      </ContentWrapper>
    </Router>
  );
};

function App() {
  return (
    <StoreProvider>
      <ChatApp />
    </StoreProvider>
  );
}

export default App;