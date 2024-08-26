import React, { useState } from 'react'

const Todo = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(todo.title)

  const toggleComplete = () => {
    updateTodo(todo._id, { completed: !todo.completed });
  };

  const handleEdit = () => {
    if (newTitle.trim()) {
      updateTodo(todo._id, { title: newTitle, completed: todo.completed })
      setIsEditing(false);
    }
  }

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Edit task"
          />
          <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 m-2' onClick={handleEdit}>Save</button>
          <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700' onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={toggleComplete}
          />
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.title}
          </span>
          <div>
          <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-700 m-2' onClick={() => setIsEditing(true)}>Edit</button>
          <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700' onClick={() => deleteTodo(todo._id)}>Delete</button>
            </div>
        </div>
      )}
    </div>
  )
}

export default Todo