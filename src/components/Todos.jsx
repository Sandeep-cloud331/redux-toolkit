import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Tdodos({ setInput }) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const updateHandler = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    setInput(todo.text);
    dispatch(removeTodo(id));
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Todos List</h2>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-sm"
          >
            <span className="text-gray-700 font-medium">{todo.text}</span>
            <div className="space-x-2">
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="px-3 py-1 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
              >
                X
              </button>
              <button
                onClick={() => updateHandler(todo.id)}
                className="px-3 py-1 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
              >
                Update
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tdodos;
