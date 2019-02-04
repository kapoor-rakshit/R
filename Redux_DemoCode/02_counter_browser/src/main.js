import {createStore} from 'redux';

function counter(state=0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

function displayCounter() {
  document.body.innerText = store.getState();
}

document.addEventListener('click', function() {
  store.dispatch( {type: 'INCREMENT'});
});

const store = createStore(counter);

displayCounter();
store.subscribe(displayCounter);
