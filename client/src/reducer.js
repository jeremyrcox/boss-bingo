import {Map, List} from 'immutable';

function setState(state, newState) {
    return state.merge(newState);
}

function toggleSpace(state, space) {
    const currentScore = state.get('score', 0);
    space = parseInt(space, 10);

    return state.set('score', currentScore ^ (1<<space));
}

export default function(state = Map(), action) {
    switch (action.type) {
        case 'SET_STATE':
            return setState(state, action.state);
        case 'TOGGLE_SPACE':
            return toggleSpace(state, action.space);
    }

    return state;
}