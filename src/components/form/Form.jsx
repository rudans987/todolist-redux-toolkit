import React, { useState } from "react";
import "./style.css";

function Form({ setTodos, todos }) {
  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };

  const [todo, setTodo] = useState(initialState);
  const [count, setCount] =useState(2)
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value, id: count });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
    setCount(count+1)
    setTodo(initialState);
  };
  console.log(todos)


  

  return (
    <form onSubmit={onSubmitHandler} className="form-box">
      <div className="input-boxes">
        <label className="form-label">제목</label>
        <input
          type="text"
          name="title"
          value={todo.title} 
          className="input-title"
          onChange={onChangeHandler}
        />
        <label className="form-label">내용</label>
        <input
          type="text"
          name="body"
          value={todo.body}
          className="input-body"
          onChange={onChangeHandler}
        />
      </div>
      <button className="add-button">추가하기</button>
    </form>
  );
};

export default Form;

