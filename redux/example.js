const reducer = Redux.combineReducers({
  todos: (state = [], action) => {
    const newState = Object.assign([], state);
    if (action.type == 'add') {
      newState.push(action.item);
    }
    if (action.type == 'remove') {
      newState.splice(action.index, 1);
    }
    return newState;
  },
});

const store = Redux.createStore(reducer);

const render = () => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  const state = store.getState();
  state.todos.forEach((todo, i) => {
    const e = document.createElement('div');
    e.innerHTML = todo;
    container.appendChild(e);
    e.onclick = () => {
      store.dispatch({
        type: 'remove',
        index: i,
      });
      render();
    };
  });
};

document.getElementById('submit-todo').onclick = () => {
  store.dispatch({
    type: 'add',
    item: document.getElementById('todo').value,
  });
  render();
};

/* 
store.dispatch passes the action to the store.

then it handles the action in reducer Redux.combineRedusers.
The main rule of reduser is that you have to create new object
for the new state instead of mutate the old one.

to get result of it you need to call store.getState()
*/
