import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Map } from 'immutable';

import words from './words';
import reducer from './reducer';
import App from './components/App';
import { GameContainer } from './components/Game';

const initialState = Map({
  words: words(),
  score: 0,
});

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
