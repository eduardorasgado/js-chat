import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HomeView from './views/Home'
import WelcomeView from './views/Welcome';
import SettingsView from './views/Settings';
import ChatView from './views/Chat';
import Navbar from "./components/Navbar";
import configureStore from './store';
import { listenToAuthChanges } from './actions/auth';

const store = configureStore();

function App() {

  useEffect(() => {
    store.dispatch(listenToAuthChanges());
  }, [store.dispatch]);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className='content-wrapper'>
          <Switch>
            <Route path="/" exact>
              <WelcomeView />
            </Route>
            <Route path="/home"t>
              <HomeView />
            </Route>
            <Route path="/chat/:id">
              <ChatView />
            </Route>
            <Route path="/settings">
              <SettingsView />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;