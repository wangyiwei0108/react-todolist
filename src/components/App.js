import React, {useState, useEffect} from 'react';
import Form from './Form';
import CardList from './CardList';

const App = () => {

  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {

    setTodos(JSON.parse(localStorage.getItem("todos")))

  }, [])

  useEffect(() => {

    const filter = () => {
      if(status === 'completed') {
        setFilteredTodos(todos.filter(item => item.completed === true))
      } else if(status === 'uncompleted') {
        setFilteredTodos(todos.filter(item => item.completed === false))
      } else {
        setFilteredTodos(todos)
      }
    }

    filter();

    const saveLocal = () => {
      localStorage.setItem("todos", JSON.stringify(todos))
    }

    saveLocal();

  }, [status, todos])

  console.log(todos)

  return(
    <div className="app__container">
      <h1 className="app__header">我の待辦事項⋯⋯</h1>
      <Form setTodos={setTodos} todos={todos} setStatus={setStatus}/>
      <CardList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  )
}

export default App;