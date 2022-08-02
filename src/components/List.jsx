import React from "react";
import Todo from "./Todo";
import styled from "styled-components";
import {useSelector} from "react-redux";

function List() {

  const todoList = useSelector((state)=> state.todos.list);
  return (
    <AllListContainer>
      <h2>Working.. 🔥</h2>
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
      <h2>Done..! 🎉</h2>
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
  display: flex; /*정렬된 요소들의 총 넓이가 부모 넓이보다 클때 이요소들을 다음줄에 정렬한다.*/ 
  flex-wrap: wrap; /* gap은 내부의 children 요소들이 일정한 간격으로 떨어져 위치할 수 있도록 사용하는 속성 */
  gap: 12px;
`;

export default List;