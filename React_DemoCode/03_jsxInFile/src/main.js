import React from 'react';
import ReactDOM from 'react-dom';

// ES6
class ReactComponent extends React.Component {
	render() {
		return (
			<div>
				<h1>Welcome to React</h1>
			</div>
		);
	}
}

ReactDOM.render(<ReactComponent/>, document.getElementById('mycontainer'));
