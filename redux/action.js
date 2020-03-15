//action type
const ADD_TODO = 'ADD_TODO';

//action
const actionAddTodo = {
    type: ADD_TODO,
    text: ''
};

//action creator
function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}

dispatch(addTodo(text));

//bound action creator
const boundAddTodo = text => dispatch(addTodo(text));