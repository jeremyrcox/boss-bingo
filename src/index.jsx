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
import App from './components/App';
import { GameContainer } from './components/Game';

const initialState = Map({
  title: 'Poore Bingo',
  score: 0
});

// const store = (
//     window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore
//   )(reducer, initialState);

const store = createStore(reducer, initialState, compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

store.dispatch(fetchWordsIfNeeded()).then(() =>
  console.log(store.getState()) // eslint-disable-line no-console
  // dispatch('SET_STATE', store.getState());
);

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
