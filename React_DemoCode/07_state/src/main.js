import React from 'react';
import ReactDOM from 'react-dom';

class ReactComponent extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			checked: false
		};
	}

	handleChange() {
		this.setState({checked: !this.state.checked})
	}

	render() {
		var currentState = this.state.checked ? " Checked" : " Unchecked";
		return (<div>
				<h2>{this.props.children}</h2>
				<input type="checkbox" onChange={this.handleChange} defaultChecked={this.state.checked}/>
				<span>{currentState} state</span>
			</div>);
	}
}

ReactDOM.render(<ReactComponent>State Demo</ReactComponent>,
    document.getElementById('mycontainer'));
