import { COMPLETE_TODO,   FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE } from "../actions/actionTypes";
  
  const initialState = {
    items: [],
    loading: false,
    error: null
  };
  
  export default function productReducer(
    state = initialState,
    action
  ) {
    switch (action.type) {
      case COMPLETE_TODO:
        // Mark the state as "loading" so we can show a spinner or something
        // Also, reset any errors. We're starting fresh.
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case COMPLETE_TODO_SUCCESS:
        console.log(action.id)
        // All done: set loading "false".
        // Also, replace the items with the ones from the server
        return {
          ...state,
          loading: false,
          items: state.items.todos.map(todo =>
            todo.id === action.id ? { ...todo, completed: true } : todo
          )
        };
  
      case COMPLETE_TODO_FAILURE:
        // The request failed, but it did stop, so set loading to "false".
        // Save the error, and we can display it somewhere
        // Since it failed, we don't have items to display anymore, so set it empty.
        // This is up to you and your app though: maybe you want to keep the items
        // around! Do whatever seems right.
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          items: []
        };
  
      default:
        // ALWAYS have a default case in a reducer
        return state;
    }
    
  }
  