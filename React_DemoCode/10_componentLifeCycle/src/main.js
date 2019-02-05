import React from 'react';
import ReactDOM from 'react-dom';

class ReactComponent extends React.Component {

	componentWillMount() {
		alert("component will mount");
	}

	componentDidMount() {
		alert("component did mount");
	}

	componentWillUnmount() {
		alert("component will unmount");
	}

	render() {
		alert("Inside render method ...");
		return (
			<div id="demo-container">
				<h2>{this.props.children}</h2>
				<h1>ASR chaliye</h1>
			</ div>
			);
	}
}

ReactDOM.render(<ReactComponent>Component Lifecycle demo</ReactComponent>,
	document.getElementById('mycontainer'));



/* simulation code for Unmounting*/
var removeReactComponent = document.getElementById('mycontainer');
removeReactComponent.onclick = function() {
	ReactDOM.unmountComponentAtNode(document.getElementById('mycontainer'));
	alert("component is actually unmounted now");
}
