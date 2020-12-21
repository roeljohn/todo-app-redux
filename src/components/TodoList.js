import React from "react";
import { connect } from "react-redux";
import { listTodos } from "../actions/listTodos";
import Todo from "./Todo";
// import { getTodos } from "../redux/selectors";

class TodoList extends React.Component {
  componentDidMount() {
    this.props.dispatch(listTodos());
  }

  render() {
    const { error, loading, todos } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <ul className="todo-list">
        {console.log('new todo', todos)}
      {todos && todos.length
        ? todos.map((todo, index) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
        : "No todos, yay!"}
    </ul>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos.items,
  loading: state.todos.loading,
  error: state.todos.error
});

export default connect(mapStateToProps)(TodoList);