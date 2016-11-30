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
  return (dispatch, getState) => {
    if (shouldFetchWords(getState())) {
      return dispatch(fetchWords());
    }

    return Promise.resolve();
  };
}
