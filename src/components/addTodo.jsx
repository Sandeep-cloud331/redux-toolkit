import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, addTodo } from '../features/todo/todoSlice';

function Tdodos({ input, setInput }) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input !== '') {
      dispatch(addTodo(input));
      setInput('');
    }
  };
  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">What you want to do!</h2>
      <form onSubmit={addTodoHandler} className="mb-4 flex space-x-2">
        <input
          type="text"
          className="flex-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter a todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Tdodos;