import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedComponentsWithType,
  Simulate
} from 'react-addons-test-utils';

import {List} from 'immutable';

import {Game} from '../../src/components/Game';
import {Space} from '../../src/components/Space';
import {expect} from 'chai';

describe('Game', () => {

    it('Renders one gameboard', () => {
        const component = renderIntoDocument(<Game />);
        const gameboard = scryRenderedComponentsWithType(component, Game);

        expect(gameboard.length).to.equal(1);
    });

    it('has a Space component for each word provided', () => {
        const words = List.of('omnichannel', 'epicenter','portfolio rationalization');
        const component = renderIntoDocument(<Game words={words}/>);

        const spaces = scryRenderedComponentsWithType(component, Space);
        expect(spaces.length).to.equal(3);
    });

});