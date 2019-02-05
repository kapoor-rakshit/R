import React from 'react';

export default class InnerComponent extends React.Component {

  constructor(props) {
      super(props);

      this.handleCheckboxChange = this.handleCheckboxChange.bind(this);

      this.state = {
        nameInCapitals: "DEFAULT",
        checked: false
      };
  }

  componentWillReceiveProps(nextProps) {
    console.log("Component Will Receive Props of InnerComponent called");
    var myname = nextProps.myname;
    this.setState({nameInCapitals: myname.toUpperCase()});
  }

  componentWillUpdate() {
    console.log("Component Will Update of InnerComponent called");
  }

  componentDidUpdate() {
    console.log("Component Did Update of InnerComponent called");
  }

  handleCheckboxChange() {
    this.setState({checked: !this.state.checked})
  }

  render () {
    var currentState = this.state.checked ? " Checked" : " Unchecked";
    return (
      <div>
        <h2>Inner Component Heading</h2>
        <span><b>Passed Name: </b></span> {this.state.nameInCapitals}
        <br/>
        <input type="checkbox" onChange={this.handleCheckboxChange} defaultChecked={this.state.checked}/>
        <span>{currentState} state</span>
      </ div>
    );
  }
}
