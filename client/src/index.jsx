import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';

import reducer from './reducer';
import App from './components/App';
import { GameContainer } from './components/Game';

const sampleData = {
  words: [
    'omnichannel',
    'epicenter',
    'portfolio rationalization',
    'synergy',
    'goodness',
    'awfulness',
    'established patterns',
    'parity',
    'roadmap',
    'bucket of work',
    'paramount',
    'architectural runway',
    'flux capacitor',
    'ramping up intelligently',
    'differentiate',
    'money where our mouth is',
    'tap into these capabilities',
    'rigidity',
    'myriad',
    'theme',
    'manifest',
    'stewards',
    'catalyst',
    'destiny',
    'speculate',
  ],
  score: 0,
};
const initialState = fromJS(sampleData);

const store = (
    window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore
  )(reducer, initialState);

const routes = (
  <Route component={App}>
    <Route path="/" component={GameContainer} />
  </Route>
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
