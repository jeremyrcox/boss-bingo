import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  scryRenderedComponentsWithType,
  Simulate
} from 'react-addons-test-utils';

import {List} from 'immutable';

import {Space} from '../../src/components/Space';
import {expect} from 'chai';

describe('Space', () => {

  it('Renders a list item with the provided word ', () => {
    const component = renderIntoDocument(<Space word="test" />);
    const space = scryRenderedDOMComponentsWithTag(component, 'li');

    expect(space[0].textContent).to.equal('test');
  });

  it('Responds to a click event with the index of the space', () => {
    let clickedSpace;
    const toggleSpace = (space) => {
      clickedSpace = parseInt(space, 10);
    };

    const component = renderIntoDocument(<Space toggleSpace={toggleSpace} space="1" word="test" />);
    const space = scryRenderedDOMComponentsWithTag(component, 'li');
    Simulate.click(space[0]);

    expect(clickedSpace).to.equal(1);
  });

});
