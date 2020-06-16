import React from 'react';

export default class ListItem extends React.Component {
	render() {
		return (
			<h2>
				{this.props.index} - {this.props.content}
			</h2>
		);
	}
}
