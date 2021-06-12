import React, {useState, useEffect} from 'react';
import Form from './Form';
import ErrandList from './ErrandList';


const App = () => {

  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [stars, setStars] = useState(0);
  const [completedNum, setCompletedNum] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localStorage.getItem("todos")))
    }
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

  return(
    <div className="app__container">
      <h1 className="app__header">我の待辦事項</h1>
      <Form setTodos={setTodos} todos={todos} setStatus={setStatus} setStars={setStars} stars={stars} completedNum={completedNum}/>
      <ErrandList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} stars={stars} setCompletedNum={setCompletedNum}/>
    </div>
  )
}

export default App;