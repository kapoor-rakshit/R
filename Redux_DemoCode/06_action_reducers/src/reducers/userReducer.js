import * as actionTypes from '../actions/actionTypes';

export default function userReducer(state=[], action) {
  switch (action.type) {
    case actionTypes.ADD_USER:
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
