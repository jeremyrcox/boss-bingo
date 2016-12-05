import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { Map } from 'immutable';

import { fetchWordsIfNeeded } from './fetch-words';
import reducer from './reducer';
import dispatchSocketEvents from './socket-dispatch';
import App from './components/App';
import { GameContainer } from './components/Game';

import config from '../config.json';

let initialState = Map({
  title: 'Boss Bingo',
  score: 0
});

if (config.public && config.public.title) {
  initialState = initialState.set('title', config.public.title);
}

const store = createStore(reducer, initialState, compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

store.dispatch(fetchWordsIfNeeded()).then(() =>
  console.log(store.getState()) // eslint-disable-line no-console
);

const websocket = new WebSocket(`ws://localhost:${config.port}/ws`);
dispatchSocketEvents(websocket, store);

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
