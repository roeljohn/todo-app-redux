import React, { Component } from 'react';
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilter";
import { connect } from "react-redux";
import {listTodos} from "./actions/listTodos";
import "./style.css";

class App extends Component {
  render(){
    return (
      <div className="todo-app">
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
        <VisibilityFilters />
      </div>
    );
  }
}
export default App;