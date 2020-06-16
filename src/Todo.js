import React from "react";
import "./todo.css";
import Input from "./Input";
import AddButton from "./AddButton";
import ListItem from "./ListItem";

export default class Todo extends React.Component {
	state = {
		text: "",
		list: [],
	};

	addToList = () => {
		this.setState({
			list: this.state.list.concat(this.state.text),
			text: "",
		});
	};

	onChange = (e) => {
		console.log("changed");
		// this should update our text state
		// get the value from event
		this.setState({ text: e.target.value });
	};

	render() {
		return (
			<div className="todo-list">
				<h1>Todo list</h1>
				<Input text={this.state.text} onChange={this.onChange} />
				<AddButton addToList={this.addToList} />
				{this.state.list.map((str, index) => (
					<ListItem key={index} index={index + 1} content={str} />
				))}
			</div>
		);
	}
}
