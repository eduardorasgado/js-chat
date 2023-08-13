import React from 'react';
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

const store = configureStore();

function App() {

  const title = "Hello there!";
  const enhancedTitle = `${title} from my React Application.`;

  const sendNotification = () => {
    //alert("Hey, we would need a language manager to load spanish");
    //insecure, exposing window.sendNotification in webbrowser
    //window.sendNotification("Hey, we would need a language manager to load spanish");

    processApi
      .notification
      .sendNotification("Hey, we would need a language manager to load spanish, i think!: "
        + processApi.dummyAttr);
  }

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