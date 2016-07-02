export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function toggleSpace(space) {
  return {
    type: 'TOGGLE_SPACE',
    space
  };
}

export function invalidateWords() {
  return {
    type: 'INVALIDATE_WORDS'
  };
}

export function requestWords() {
  return {
    type: 'REQUEST_WORDS'
  };
}

export function receiveWords(json) {
  return {
    type: 'RECEIVE_WORDS',
    words: json,
    receivedAt: Date.now()
  };
}
