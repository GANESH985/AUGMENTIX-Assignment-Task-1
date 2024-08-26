import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(title)
    setTitle('')
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
        className='border-2 border-lime-500 rounded-lg p-2'
      />
      <button type="submit" className='m-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700'>Add</button>
    </form>
  )
}

export default TodoForm
