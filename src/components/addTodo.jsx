import {useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';

function AddTodo({input,setInput}) {

  const dispatch = useDispatch();

  const addTodoHandler=(e)=>{
    e.preventDefault()
    
    if(input != ''){
      dispatch(addTodo(input))
      setInput('')
    }

  }
  return (
    <>
    <form onSubmit={addTodoHandler} className=''>
      <input type="text"
      className=''
      placeholder='enter a todo'
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />

      <button type='submit'> add</button>
    </form>
    </>
  )
}

export default AddTodo