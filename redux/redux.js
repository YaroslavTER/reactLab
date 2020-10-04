import { createStore } from 'redux';

function counter(state = 0, {type}) {
  switch(type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

/* 
  `store` contains only {subscribe, dispatch, getState}
*/
let store = createStore(counter);

/* 
  `store.subscribe` nedded to update UI on stet change.
*/
store.subscribe(() => console.log(store.getState()));

store.dispatch({type: 'INCREMENT'});
//1
store.dispatch({type: 'INCREMENT'});
//2
store.dispatch({type: 'DECREMENT'});
//1