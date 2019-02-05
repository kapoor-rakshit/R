import React from 'react';
import ReactDOM from 'react-dom';

class ReactComponent extends React.Component {

	constructor(props) {
		super(props);
		this.retrieveFUNCvar = this.retrieve.bind(this);
	}

	retrieve() {
        var name = this.refs.name.value;
        var age = this.refs.age.value;
        document.getElementById("values").innerHTML = name + " " + age;
	}

	render() {
		return (
			<div>
				<h2>{this.props.children}</h2>
				<span>Enter your name: </ span>
				<input type="text" ref="name"/><br/><br/>
				<span>Enter age: </span>
				<input type="number" ref="age" pattern="[1-9]+"/><br/><br/>
				<p id="values"/><br/><br/>
				<button onClick={this.retrieveFUNCvar}>Retrieve name and display</button>
			</ div>
			);
	}
}

ReactDOM.render(<ReactComponent>Ref Demo</ReactComponent>,document.getElementById('mycontainer'));
