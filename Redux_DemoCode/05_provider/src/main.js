import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';
import UsersComponent from './UsersComponent';

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

const userApp = combineReducers( {
  users
});

var store = createStore(userApp);

ReactDOM.render(
  <Provider store={store}>
    <UsersComponent/>
  </Provider>, document.getElementById('mycontainer'));
