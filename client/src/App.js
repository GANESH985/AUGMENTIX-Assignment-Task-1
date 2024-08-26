import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'


const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('/api/todos')
      .then(response => setTodos(response.data))
      .catch(error => console.error(error))
  }, [])

  const addTodo = (title) => {
    axios.post('/api/todos', { title })
      .then(response => setTodos([...todos, response.data]))
      .catch(error => console.error(error))
  }

  const updateTodo = (id, updatedTodo) => {
    axios.put(`/api/todos/${id}`, updatedTodo)
      .then(response => setTodos(todos.map(todo => todo._id === id ? response.data : todo)))
      .catch(error => console.error(error));
  }

  const deleteTodo = (id) => {
    axios.delete(`/api/todos/${id}`)
      .then(() => setTodos(todos.filter(todo => todo._id !== id)))
      .catch(error => console.error(error));
  }

  return (
    <div className="text-center min-h-screen bg-gray-400 pt-20">
      <header>
      <h1 className='text-3xl text-white'>Todo List</h1>
      <TodoForm addTodo={addTodo}  />
      {todos.map(todo => (
         <Todo key={todo._id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      ))}
      </header>
    </div>
  )
}

export default App
