import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';

import { Space } from './Space';
import * as actionCreators from '../action-creators';

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { words: this.props.words, score: 0 };
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  getWords() {
    return this.state.words || [];
  }

  toggleSpace(space) {
    this.setState({ score: this.state.score ^ (1 << space) });
  }

  isWinning() {
    const winPatterns = [
      65011712,
      2031616,
      63488,
      1984,
      62,
      34636832,
      17318416,
      8659208,
      4329604,
      2164802,
      34087042,
      2236960,
    ];

    return winPatterns.some(pattern => (pattern & this.props.score) === pattern);
  }

  render() {
    return (
      <div className={`game-board ${this.isWinning() ? 'win' : ''}`}>
        <ul className="heading">
          <li>P</li>
          <li>O</li>
          <li>O</li>
          <li>R</li>
          <li>E</li>
        </ul>
        <ul className="game">
          {this.getWords().map((word, index) =>
            <Space key={word} word={word} space={25 - index} {...this.props} />
          )}
        </ul>
      </div>
    );
  }
}

Game.propTypes = {
  words: React.PropTypes.array.isRequired,
  score: React.PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return {
    words: state.get('words'),
    score: state.get('score'),
  };
}

export const GameContainer = connect(
  mapStateToProps, actionCreators
)(Game);
