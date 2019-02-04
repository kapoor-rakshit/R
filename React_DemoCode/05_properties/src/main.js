import React from 'react';
import ReactDOM from 'react-dom';

class ReactComponent extends React.Component {
	render() {
		return (
			<div>
				<h1>Operating System: {this.props.os}</h1>
				<i>Version: {this.props.ver}</i>
				<h3>Developed by: {this.props.children}</h3>
			</div>
		);
	}
}

ReactDOM.render(<div>
			<ReactComponent os="Windows" ver="10"> Microsoft </ReactComponent>
			<ReactComponent os="Solaris"> Sun Microsystems </ReactComponent>
			<ReactComponent os="iOS" ver="12.1.3"> Apple <i>Best in market</i> </ReactComponent>
			</div>
	, document.getElementById('mycontainer'));


