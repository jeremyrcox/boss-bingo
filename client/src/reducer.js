import { Map } from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function toggleSpace(state, space) {
  const currentScore = state.get('score', 0);
  const spaceInt = parseInt(space, 10);

  return state.set('score', currentScore ^ (1 << spaceInt));
}

export default function (state = Map(), action) { // eslint-disable-line new-cap
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    case 'TOGGLE_SPACE':
      return toggleSpace(state, action.space);
    default:
      return state;
  }
}
