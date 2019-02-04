import React from 'react';
import ReactDOM from 'react-dom';

class ReactComponent extends React.Component {
	constructor(props) {
		super(props);
		this.handleChangeFuncVar = this.handleChange.bind(this);
		this.state = {
			checkedVAR: true,
			clickVAR: false
		};
	}

	handleChange() {
		this.setState({
			checkedVAR: !this.state.checkedVAR,
			clickVAR: !this.state.clickVAR
		})
	}

	render() {
		var currentState = this.state.checkedVAR ? "True" : "False";
		var chk = this.state.clickVAR ? "Click to Check" : "Click to Uncheck";
		return (
			<div>
				<h2>{this.props.children}</h2>
				<input type="checkbox" onChange={this.handleChangeFuncVar} defaultChecked={this.state.checkedVAR}/>
				<span>{currentState} state {chk}</span>
			</div>
			);
	}
}

ReactDOM.render(<ReactComponent>State Demo</ReactComponent>,
    document.getElementById('mycontainer'));
