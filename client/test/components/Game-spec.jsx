import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  scryRenderedComponentsWithType,
  Simulate
} from 'react-addons-test-utils';

import {List} from 'immutable';

import {Game} from '../../src/components/Game';
import {Space} from '../../src/components/Space';
import {expect} from 'chai';

const testProps = {
  words: List.of('omnichannel', 'epicenter','portfolio rationalization'),
  score: 0,
  toggleSpace: () => {},
};

describe('Game', () => {
  it('Renders one gameboard', () => {
    const component = renderIntoDocument(<Game {...testProps}/>);
    const gameboard = scryRenderedComponentsWithType(component, Game);

    expect(gameboard.length).to.equal(1);
  });

  it('has a Space component for each word provided', () => {
    const component = renderIntoDocument(<Game {...testProps}/>);
    const spaces = scryRenderedDOMComponentsWithTag(component, 'li');

    expect(spaces.length).to.equal(8); //five <li> for header plus one for each word
    expect(spaces[5].textContent).to.equal('omnichannel');
    expect(spaces[6].textContent).to.equal('epicenter');
    expect(spaces[7].textContent).to.equal('portfolio rationalization');
  });

  it('handles click events on child <Space> elements', () => {
    let clickedSpace;
    testProps.toggleSpace = (space) => {
      clickedSpace = parseInt(space, 10);
    };

    const component = renderIntoDocument(<Game {...testProps}/>);
    const spaces = scryRenderedDOMComponentsWithTag(component, 'li');

    Simulate.click(spaces[5]);

    expect(clickedSpace).to.equal(25);
  });

});
