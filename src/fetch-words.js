import fetch from 'isomorphic-fetch';
import { requestWords, receiveWords } from './action-creators';

export function fetchWords() {
  return function (dispatch) { // eslint-disable-line func-names
    dispatch(requestWords());
    return fetch('/words')
      .then(response => response.json())
      .then(json => dispatch(receiveWords(json)));
  };
}

function shouldFetchWords(state) {
  if (!state.words) {
    return true;
  }

  if (state.isFetchingWords) {
    return false;
  }

  return state.didInvalidateWords;
}

export function fetchWordsIfNeeded() {
  // Note that the function also receives getState()
  // which lets you choose what to dispatch next.

  // This is useful for avoiding a network request if
  // a cached value is already available.

  return (dispatch, getState) => {
    if (shouldFetchWords(getState())) {
      // Dispatch a thunk from thunk!
      return dispatch(fetchWords());
    }

    // Let the calling code know there's nothing to wait for.
    return Promise.resolve();
  };
}
