import {createStore, combineReducers } from 'redux';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

function users(state=[], action) {
  switch (action.type) {
    case 'ADD_USER':
      return [
          ...state,
          {
            id: action.id,
            name: action.name,
            location: action.location
          }
        ];
    default:
      return state;
  }
}

const rootReducer = combineReducers( {
  users
});

var currentID=0;
class UsersComponent extends Component {
  constructor(props) {
    super(props);
    this.addUser = this.addUser.bind(this);
  }

  addUser() {
    var name = this.refs.name.value;
    var location = this.refs.location.value;
    store.dispatch({ type: 'ADD_USER', id: currentID++, name: name, location: location });
  }

  render() {
    return (
      <div>
        <span>Enter name: </span>
        <input type="text" ref="name"/><br/><br/>
        <span>Enter location: </span>
        <input type="text" ref="location"/><br/><br/>
        <button onClick={this.addUser}>Add User</button>
        <ul>
          {this.props.users.map(user =>
            <li key={user.id}> {user.name}, {user.location} </li>
          )}
        </ul>
      </div>);
  }
}

function displayUsers() {
  ReactDOM.render(<UsersComponent users={store.getState().users}/>, document.getElementById('mycontainer'));
}

var store = createStore(rootReducer);
displayUsers();
store.subscribe(displayUsers);
