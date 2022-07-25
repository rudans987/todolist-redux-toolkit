import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

function List({ todos, setTodos }) {
  const onDeleteHandler = (todoId) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodos(newTodos);
  };

  const onEditHandler = (todoId) => {
    const newTodos = todos.map((todo) => {
      return (todo.id === todoId) ? { ...todo, isDone: !todo.isDone } : { ...todo };
    });

    setTodos(newTodos);
  };
  return (
    <div className="list-container">
      <h2 className="list-title">Working.. 🔥</h2>
      <div className="list-wrap">
        {todos.map((todo) => {
          return (!todo.isDone) ?
            <Todo
              todo={todo}
              key={todo.id}
              setTodos={setTodos}
              onDeleteHandler={onDeleteHandler}
              onEditHandler={onEditHandler}
            />
            : null;
        })}
      </div>
      <h2 className="list-title">Done..! 🎉</h2>
      <div className="list-wrap">
        {todos.map((todo) => {
          return (todo.isDone) ?
            <Todo
              todo={todo}
              key={todo.id}
              setTodos={setTodos}
              onDeleteHandler={onDeleteHandler}
              onEditHandler={onEditHandler}
            />
            : null;
        })}
      </div>
    </div>
  );
}

export default List;