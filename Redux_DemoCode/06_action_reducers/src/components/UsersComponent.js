import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../actions/userActions';
import UserForm from './UserForm';

var currentID=0;
class UsersComponent extends Component {
  constructor(props) {
    super(props);
    this.addUser = this.addUser.bind(this);
  }

  addUser(user) {
    this.props.actions.addUser(user);
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


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent);

/*
this.props.addUser(user);
function mapDispatchToProps(dispatch) {
  return {
    addUser: (user) => { dispatch(userActions.addUser(user)); }
  };
}
*/
