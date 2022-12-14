import React from "react";
import Todo from "./Todo";
import styled from "styled-components";
import {useSelector} from "react-redux";

function List() {

  const todoList = useSelector((state)=> state.list);
  return (
    <AllListContainer>
      <h2>Working.. π₯</h2>
      <ListWrap>
        {todoList.map((todo) => {
          return (!todo.isDone) ?
            <Todo
              todo={todo}
              key={todo.id}
            />
            : null;
        })}
      </ListWrap>
      <h2>Done..! π</h2>
      <ListWrap>
        {todoList.map((todo) => {
          return (todo.isDone) ?
            <Todo
              todo={todo}
              key={todo.id}
            />
            : null;
        })}
      </ListWrap>
    </AllListContainer>
  );
}

const AllListContainer = styled.div`
  padding: 0 24px;
`;

const ListWrap = styled.div`
  display: flex; /*μ λ ¬λ μμλ€μ μ΄ λμ΄κ° λΆλͺ¨ λμ΄λ³΄λ€ ν΄λ μ΄μμλ€μ λ€μμ€μ μ λ ¬νλ€.*/ 
  flex-wrap: wrap; /* gapμ λ΄λΆμ children μμλ€μ΄ μΌμ ν κ°κ²©μΌλ‘ λ¨μ΄μ Έ μμΉν  μ μλλ‘ μ¬μ©νλ μμ± */
  gap: 12px;
`;

export default List;