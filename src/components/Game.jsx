import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';

import { Heading } from './Heading';
import { Space } from './Space';
import * as actionCreators from '../action-creators';

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { words: this.props.words, score: 0 };
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  getTitle() {
    return this.props.title || 'BINGO';
  }

  getPlayerCount() {
    return this.props.players || 0;
  }

  getWords() {
    return this.props.words || [];
  }

  isFetchingWords() {
    return this.props.isFetchingWords;
  }

  toggleSpace(space) {
    this.setState({ score: this.props.score ^ (1 << space) });
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
      2236960
    ];

    return winPatterns.find(pattern => (pattern & this.props.score) === pattern) || 0;
  }

  render() {
    if (this.isFetchingWords()) {
      return (
        <div> Fetching words... </div>
      );
    }

    return (
      <div>
        <Heading title={this.getTitle()} players={this.getPlayerCount()} />
        <div className={`game-board ${this.isWinning() ? 'win' : ''}`}>
          <ul className="game">
            {this.getWords().map((word, index) =>
              <Space key={word} word={word} space={25 - index} win={this.isWinning()} {...this.props} />
            )}
          </ul>
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  words: React.PropTypes.object,
  score: React.PropTypes.number.isRequired,
  title: React.PropTypes.string,
  players: React.PropTypes.number,
  isFetchingWords: React.PropTypes.bool
};

function mapStateToProps(state) {
  return {
    words: state.get('words'),
    score: state.get('score'),
    title: state.get('title'),
    players: state.get('players'),
    isFetchingWords: state.get('isFetchingWords')
  };
}

export const GameContainer = connect(
  mapStateToProps, actionCreators
)(Game);
