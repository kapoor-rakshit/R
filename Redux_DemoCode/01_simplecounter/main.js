var redux = require('redux');

function counter(state, action) {
  if (typeof state === 'undefined')
    return 0;

  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

var store = redux.createStore(counter);
console.log("Counter Value (Initial) = " + store.getState());

store.dispatch({ type: 'INCREMENT'} );
console.log("Counter Value (After Increment) = " + store.getState());

store.dispatch({ type: 'DECREMENT' });
console.log("Counter Value (After Decrement) = " + store.getState());
