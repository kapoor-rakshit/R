import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';
import * as userActions from '../actions/userActions';
import UserForm from './UserForm';
import UserComponent from './UserComponent';

var currentID=0;
class UsersComponent extends Component {
  constructor(props) {
    super(props);
    toastr.options.timeOut = 1000;
    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  addUser(user) {
    this.props.actions.addUser(user)
      .then(()=> toastr.success('User added'))
      .catch(error => {
        alert(error);
      });
  }

  deleteUser(id) {
    this.props.actions.deleteUser(id)
      .then(()=> toastr.success('User deleted'));
  }

  render() {
    return (
      <div>
        <UserForm onAddUser={this.addUser} />
        <ul>
          {this.props.users.map(user =>
                              <UserComponent key={user.id} id={user.id}
                                name={user.name} location={user.location}
                                onDelete={this.deleteUser} />
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
