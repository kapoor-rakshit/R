import React from 'react';
import ReactDOM from 'react-dom';

class ReactComponent extends React.Component {
	render() {
		return (
			<div>
				<h1>Operating System: {this.props.os}</h1>
				<h3>Developed by {this.props.children}</h3>
			</div>
		);
	}
}

ReactDOM.render(<div>
			<ReactComponent os="Windows">Microsoft</ReactComponent>
			<ReactComponent os="Solaris">Sun Microsystems</ReactComponent>
			<ReactComponent os="iOS">Apple</ReactComponent>
			</div>
	, document.getElementById('mycontainer'));


/*
// Stateless Component or Functional Component
const ReactComponent = (props) => {
	return (
		<div>
			<h1>Operating System: {props.os}</h1>
			<h3>Developed by {props.children}</h3>
		</div>
	)
}
*/
