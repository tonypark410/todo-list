import React from "react";

class TodoList extends React.Component {
	// Lifecycle
	// 1. constructor();
	// 2. render();
	// 3. componentDidMount();

	state = {
		sum: 0,
	};

	constructor(props) {
		super();
		// console.log("1. i'm constructing");

		// 약속
		// this.state = {};
		// this.setState({});
	}

	componentDidMount() {
		// console.log("3. i'm mounted");
		this.add(1, 2);
	}

	componentWillUnmount() {}

	add = (a, b) => {
		// WRONG!!!!!
		// this.state.sum = a + b;
		// console.log(this.state);


		//WRITE ONLY
		this.setState({ sum: a + b });
	}

	// 	componentShouldUpdate() {
	//
	// 	}
	//
	// 	componentDidUpdate() {
	//
	// 	}

	render() {
		// console.log("2. i'm rendering");

		// causes infinite loop
		// this.setState({sum: 0});

		// READ ONLY
		// this.state.sum
		return (
			<div style={{ padding: 40, fontSize: 40 }}>
				Sum: {this.state.sum}
			</div>
		);
	}
}

export default TodoList;
