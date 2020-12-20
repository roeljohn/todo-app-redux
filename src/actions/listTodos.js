import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_SUCCESS, FETCH_TODOS } from "./actionTypes";

export function listTodos() {
    return dispatch => {
      dispatch(fetchProductsBegin());
        return fetch('https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos')
        .then(response => response.json())
        .then(json => {
            dispatch(fetchProductsSuccess(json));
              return json;
            // console.log(json)
          })
        .catch(error =>
          dispatch(fetchProductsFailure(error))
        );
    };
}

export const fetchProductsBegin = () => ({
    type: FETCH_TODOS
});

export const fetchProductsSuccess = todos => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: { todos }
});
  
export const fetchProductsFailure = error => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: { error }
});
  