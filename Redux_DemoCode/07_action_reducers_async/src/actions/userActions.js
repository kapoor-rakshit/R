import * as types from './actionTypes';
import UserApi from '../data/userApi';

export function loadUsersSuccess(users) {
  return { type: types.LOAD_USERS_SUCCESS, users};
}

export function addUserSuccess(user) {
  return { type: types.ADD_USER_SUCCESS, user};
}

export function deleteUserSuccess(id) {
  return { type: types.DELETE_USER_SUCCESS, id};
}

export function loadUsers() {
  return function(dispatch) {
    return UserApi.getAllUsers().then(users => {
      dispatch(loadUsersSuccess(users));
    }).catch(error => {
      throw(error);
    });
  };
}

export function addUser(user) {
  return function (dispatch, getState) {
    return UserApi.saveUser(user).then(user => {
      dispatch(addUserSuccess(user));
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteUser(id) {
  return function (dispatch, getState) {
    return UserApi.deleteUser(id).then(() => {
      dispatch(deleteUserSuccess(id));
    }).catch(error => {
      throw(error);
    });
  };
}
