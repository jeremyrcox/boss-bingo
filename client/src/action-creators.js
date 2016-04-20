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
    }
}