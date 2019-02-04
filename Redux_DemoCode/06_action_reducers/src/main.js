import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import UsersComponent from './components/UsersComponent';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <UsersComponent/>
  </Provider>, document.getElementById('mycontainer'));
