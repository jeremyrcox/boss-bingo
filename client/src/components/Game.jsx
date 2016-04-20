import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

import {Space} from './Space';
import * as actionCreators from '../action-creators';

export const Game = React.createClass({
	mixins: [PureRenderMixin],

	getInitialState: function() {
	    return {words: this.props.words, score: 0};
	},
	
	getWords: function(){
		return this.state.words || [];
	},

	toggleSpace: function(space){
		this.setState({score: this.state.score ^ (1<<space)});
	},

	isWinning: function() {
	    const winPatterns = [65011712, 2031616, 63488, 1984, 62, 34636832, 17318416, 8659208, 4329604, 2164802, 34087042, 2236960];
	    
	    return winPatterns.some(pattern => {
	        return (pattern & this.props.score) === pattern;
	    });
	},

	render: function(){
		return <div className={'game-board ' + (this.isWinning() ? 'win': '')}>
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
		</div>;
	}
});

function mapStateToProps(state) {
	return {
		words: state.get('words'),
		score: state.get('score')
	};
}

export const GameContainer = connect(
	mapStateToProps, actionCreators
)(Game);