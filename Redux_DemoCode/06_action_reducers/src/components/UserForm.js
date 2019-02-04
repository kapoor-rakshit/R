import React from 'react';

export default class UserForm extends React.Component {
    constructor(props) {
      super(props);
      this.onAddClick = this.onAddClick.bind(this);
    }

    onAddClick() {
      let user = {};
      user.name = this.refs.name.value;
      user.location = this.refs.location.value;
      this.props.onAddUser(user);
    }

    render() {
        return (
          <div>
            <span>Enter name: </span>
            <input type="text" ref="name"/><br/><br/>
            <span>Enter location: </span>
            <input type="text" ref="location"/><br/><br/>
            <button onClick={this.onAddClick}>Add User</button>
          </div>
        );
    }
}
