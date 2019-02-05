import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class ReactComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
		return (
      <div>
				<h2>{this.props.children}</h2>
				<h4>Check the warning messages in the JavaScript console</h4>
				<p>Name : {this.props.name}</p>
				<p>Projects : {this.props.projects}</p>
				<p>Age : {this.props.age}</p>
			</ div>
      );
	}
}

ReactComponent.propTypes = {
  name: PropTypes.string.isRequired,
  projects: PropTypes.array,
  age (props, propName) {

      if (typeof props[propName] !== "number"){
          return new Error("Age must be a number");
      }

      if (props[propName] > 100) {
          return new Error("Age entered is " + props[propName] + ", it should be less than or equal to 100");
      }
  }
};

ReactComponent.defaultProps = {
    name: "user",
    age: "NA",
    projects: "NA"
};

var projArr = ["ShoppingCart", "BookMyBus", "IssueTracker"];
ReactDOM.render(<ReactComponent projects={projArr} age={89}>PropTypes demo</ReactComponent>,
    document.getElementById('mycontainer'));
