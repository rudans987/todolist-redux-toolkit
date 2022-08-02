import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";

import {deleteTodo, updateTodo} from "../redux/modules/todos";
const Todo = ({ todo})=> {
  const navigate = useNavigate();
  

  const dispatch = useDispatch();
  return (
    <TodoContainer>
      <div>
        <h2>{todo.title}</h2>
        <div>{todo.body}</div>
      </div>
      <ButtonSet>
        <DeleteButton
          onClick={() => {
          dispatch(deleteTodo(todo.id));
        }}
        >
          삭제하기
        </DeleteButton>
        <CompleteButton
          onClick={() => {
          dispatch(updateTodo({id:todo.id, isDone:todo.isDone}));
        }}
        >
        {todo.isDone ? "취소" : "완료"}
        </CompleteButton>
        <HomeButton onClick={()=>
          navigate("/detail/"+todo.id)
        }>상세보기</HomeButton>
      </ButtonSet>
    </TodoContainer>
  );
}

const TodoContainer= styled.div`
   width: 270px;
  /* height: 150px; */
  border: 4px solid #0080ff;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
  margin-bottom: 5px;
`;


const ButtonSet= styled.div`
   display: flex;
  gap: 10px;
  margin-top: 24px;
`;


const Button = styled.button`
  border:none;
  width: 50%;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  color :#fff;
`;

const DeleteButton = styled(Button)`
  border: 2px solid red;
  background-color: red;
`;

const CompleteButton = styled(Button)`
  border: 2px solid #0080ff;
  background-color: #0080ff;
`;

const HomeButton = styled(Button)`
  border: 2px solid plum;
  background-color: plum;
`;


export default Todo;
