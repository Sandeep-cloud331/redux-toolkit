import {createSlice,nanoid} from "@reduxjs/toolkit";


const initialState = {
  todos:[]
}
function sayHello(state,action){
  
  const todo ={
    id:nanoid(),
    text:action.payload
  }
  state.todos.push(todo)
}

export const todoSlice = createSlice({
  name:'todo',
  initialState,
  reducers:{
    addTodo: sayHello,
    removeTodo : (state,action)=>{
      state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
    }
  }
})

export const {addTodo,removeTodo,updateTodo}  = todoSlice.actions

export default todoSlice.reducer