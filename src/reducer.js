import { Map } from 'immutable';
import { SET_STATE, TOGGLE_SPACE, INVALIDATE_WORDS, REQUEST_WORDS, RECEIVE_WORDS, SOCKET_MESSAGE } from './actions';

function setState(state, newState) {
  return state.merge(newState);
}

function toggleSpace(state, space) {
  const currentScore = state.get('score', 0);
  const spaceInt = parseInt(space, 10);

  return state.set('score', currentScore ^ (1 << spaceInt));
}

function invalidateWords(state) {
  return state.merge({
    words: [],
    didInvalidateWords: true
  });
}

function requestWords(state) {
  return state.merge({
    isFetchingWords: true,
    didInvalidateWords: false
  });
}

function receiveWords(state, words, receivedAt) {
  return state.merge({
    isFetchingWords: false,
    didInvalidateWords: false,
    words,
    lastUpdatedWords: receivedAt
  });
}

function recieveSocketMessage(state, message) {
  return state.set('players', message.players);
}

export default function (state = Map(), action) { // eslint-disable-line new-cap
  switch (action.type) {
    case SET_STATE:
      return setState(state, action.state);
    case TOGGLE_SPACE:
      return toggleSpace(state, action.space);
    case INVALIDATE_WORDS:
      return invalidateWords(state);
    case REQUEST_WORDS:
      return requestWords(state);
    case RECEIVE_WORDS:
      return receiveWords(state, action.words, action.receivedAt);
    case SOCKET_MESSAGE:
      return recieveSocketMessage(state, action.message);
    default:
      return state;
  }
}
