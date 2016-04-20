import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export const Space = React.createClass({
	mixins: [PureRenderMixin],

	isCovered: function(){
		return !!(this.props.score & (1 << this.props.space));
	},

	render: function(){
		return <li onClick={() => this.props.toggleSpace(this.props.space)} className={this.isCovered() ? 'covered' : ''}>
			<div>{this.props.word}</div>
		</li>;
	}
});