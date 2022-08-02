import React from "react";
import styled from "styled-components";

import { Route, Routes } from "react-router-dom";


import TodoList from "./pages/TodoList";
import Detail from "./pages/Detail";

const App=()=> {


 
  return (<Background className="App">
      <Routes>
          <Route path="/" element={<TodoList />}/>          
          <Route path="/detail/:id" element={<Detail />}/>
        </Routes>
    </Background>)
}


const Background = styled.div`
background-color: #0080ff;
`;

export default App;



