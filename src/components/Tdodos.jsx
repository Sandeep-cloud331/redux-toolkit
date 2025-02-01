import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'


function Tdodos({setInput}) {
  const todos = useSelector(state =>state.todos)
  const dispatch = useDispatch();
  const updateHandler=(id) =>{
    const todo = todos.find(todo => todo.id === id)
    setInput(todo.text);
    dispatch(removeTodo(id));

    
  }
  return (
    <>
    <div>Todos list</div>
    {todos.map((todo)=>(
      <li key={todo.id}>
        {todo.text}
        <button onClick={()=> dispatch(removeTodo(todo.id))}>X</button>
        <button onClick={()=> updateHandler(todo.id) }> update</button>
      </li>
      
    ))}
    </>
  )
}

export default Tdodos