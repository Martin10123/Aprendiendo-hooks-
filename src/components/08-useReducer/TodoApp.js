import React, { useEffect, useReducer } from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import todoReducer from "./todoReducer";

import "./styles.css";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoID) => {
    const actionDelete = {
      type: "delete",
      payload: todoID,
    };

    dispatch(actionDelete);
  };

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };

  const handleToggle = (todoID) => {
    dispatch({
      type: "toggle",
      payload: todoID,
    });
  };

  return (
    <div>
      <h1>Todo App {todos.length}</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        </div>
        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
