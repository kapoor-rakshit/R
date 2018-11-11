import React from 'react';
import ReactDOM from 'react-dom';

class ReactComponent extends React.Component {
	constructor(props) {
		super(props);
		this.retrieve = this.retrieve.bind(this);
	}

	retrieve() {
        var name = this.refs.name.value;
        alert("Retrieved name from text box: " + name);
	}

	render() {
		return (<div>
				<h2>{this.props.children}</h2>
				<span>Enter your name: </span>
				<input type="text" ref="name"/><br/><br/>
				<button onClick={this.retrieve} >Retrieve name and display</button>
			</div>);
	}
}

ReactDOM.render(<ReactComponent>Ref Demo</ReactComponent>,
    document.getElementById('mycontainer'));
