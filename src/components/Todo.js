import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { completeTodo } from "../actions/completeTodo";

const Todo = ({ todo, completeTodo }) => (
  <li className="todo-item" onClick={() => todo.completed ? console.log('true'): completeTodo(todo.id)}>
      
    {todo && todo.completed ? "👌" : "👋"}{" "}
    <span
      className={cx(
        "todo-item__text",
        todo && todo.completed && "todo-item__text--completed"
      )}
    >
      {todo.title}
    </span>
  </li>
);

// export default Todo;
export default connect(
  null,
  { completeTodo }
)(Todo);
