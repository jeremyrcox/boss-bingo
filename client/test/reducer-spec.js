import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {

    it('handles SET_STATE', () => {
        const initialState = Map();
        const action = {
            type: 'SET_STATE',
            state: Map({
                words: List.of('omnichannel', 'epicenter','portfolio rationalization'),
                score: 0
            })
        };
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            words: ['omnichannel', 'epicenter','portfolio rationalization'],
            score: 0
        }));
    });

    it('handles SET_STATE with plain JS payload', () => {
        const initialState = Map();
        const action = {
            type: 'SET_STATE',
            state: {
                words: ['omnichannel', 'epicenter','portfolio rationalization'],
                score: 0
            }
        };
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            words: ['omnichannel', 'epicenter','portfolio rationalization'],
            score: 0
        }));
    });

    it('handles SET_STATE without initial state', () => {
        const action = {
            type: 'SET_STATE',
            state: Map({
                words: List.of('omnichannel', 'epicenter','portfolio rationalization'),
                score: 0
            })
        };
        const nextState = reducer(undefined, action);

        expect(nextState).to.equal(fromJS({
            words: ['omnichannel', 'epicenter','portfolio rationalization'],
            score: 0
        }));
    });

    it('handles TOGGLE_SPACE', () => {
        const state = fromJS({
            words: ['omnichannel', 'epicenter','portfolio rationalization'],
            score: 0
        });

        const action = {type: 'TOGGLE_SPACE', space: '1'}
        const nextState = reducer(state, action);
        
        expect(nextState).to.equal(fromJS({
            words: ['omnichannel', 'epicenter','portfolio rationalization'],
            score: 2
        }));
    });
});