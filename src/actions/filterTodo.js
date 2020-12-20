import { SET_FILTER } from "./actionTypes";

export const filterTodo = filter => ({ type: SET_FILTER, payload: { filter } });