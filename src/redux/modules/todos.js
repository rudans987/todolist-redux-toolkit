import {createSlice, configureStore} from '@reduxjs/toolkit';

const todos = createSlice({
  name: 'todos',
  initialState: {
        list: [
          {
            id: 0,
            title: "테스트제목",
            body: "테스트내용",
            isDone: true,
          },
          {
            id: 1,
            title: "테스트제목2",
            body: "테스트내용2",
            isDone: false,
          },
        ]
      },
  reducers: {
      createTodo: (state, action) => {
          state.list.push(action.payload);
      },
      updateTodo: (state, action) => {
        state.list.map(cur => {
                     if(cur.id === parseInt(action.payload.id)) {                      
                      cur.isDone= !action.payload.isDone;
                     }
                     }
        )}
      ,
      deleteTodo: (state, action) => {
     state.list= state.list.filter(cur=>action.payload !== cur.id)
      }
  }   
});

const store = configureStore({reducer: todos.reducer});

export const{createTodo, updateTodo, deleteTodo} = todos.actions;

export default store;
