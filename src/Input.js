import React from "react";

export default class Input extends React.Component {
	render() {
		return (
			<input
				className="cool-input"
				placeholder="What do you need to do...?"
				value={this.props.text}
				onChange={this.props.onChange}
			/>
		);
	}
}
