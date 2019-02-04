import React from 'react';
import ReactDOM from 'react-dom';

class ReactComponent extends React.Component {
	render() {
		return (
			<div>
				<h1>Welcome to React!!</h1>
	   	</div>
		);
	}
}

ReactDOM.render(
		<div>
			<ReactComponent/>
			<ReactComponent/>
			<ReactComponent/>
		</div>, document.getElementById('mycontainer'));
