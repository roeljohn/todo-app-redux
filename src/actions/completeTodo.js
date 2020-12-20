import { FETCH_PRODUCTS_FAILURE, COMPLETE_TODO_SUCCESS } from "./actionTypes";

export function completeTodo(id) {
  return dispatch => {
      return fetch(`https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos/${id}`, {
          method: 'put',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify({ completed: true })
      })
      .then(response => response.json())
      .then(json => {
          dispatch(completeTodoSuccess(json.id));
        })
      .catch(error =>
        dispatch(completeTodoFailure(error))
      );
  };
}

export const completeTodoSuccess = id => ({
  type: COMPLETE_TODO_SUCCESS,
  payload: { id }
});

export const completeTodoFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});