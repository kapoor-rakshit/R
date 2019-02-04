import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserForm from './UserForm';

var currentID=0;
class UsersComponent extends Component {
  constructor(props) {
    super(props);
    this.addUser = this.addUser.bind(this);
  }

  addUser(user) {
    this.props.dispatch({ type: 'ADD_USER', id: currentID++, name: user.name, location: user.location});
  }

  render() {
    return (
      <div>
        <UserForm onAddUser={this.addUser} />
        <ul>
          {this.props.users.map(user =>
            <li key={user.id}> {user.name}, {user.location} </li>
          )}
        </ul>
      </div>);
  }
}

function mapStateToProps(state, ownProps) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps)(UsersComponent);
