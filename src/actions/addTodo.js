import { ADD_TODO, ADD_TODO_SUCCESS, FETCH_PRODUCTS_FAILURE } from "./actionTypes";


export function addTodo(content) {
  return dispatch => {
    return fetch(`https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos`, {
      method: 'post',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({ title: content, completed: false })
    })
    .then(response => response.json())
    .then(json => {
        dispatch(addTodoSuccess(json.title, content.id));
      })
    .catch(error =>
      dispatch(completeTodoFailure(error))
    );
  };
}

export const addTodoSuccess = (title, id) => ({
  type: ADD_TODO_SUCCESS,
  payload: { title, id }
});
export const completeTodoFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});