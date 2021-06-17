import React, {useState, useEffect} from 'react';
import { exampleData } from './ExampleData';
import Form from './Form';
import ErrandList from './ErrandList';

const App = () => {

  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState('');
  const [stars, setStars] = useState(1);
  const [completedNum, setCompletedNum] = useState(0);
  const [dark, setDark] = useState(false);

  // 最一開始預先設定範例資料
  useEffect(()=> {
    setTodos(exampleData);
  }, [setTodos])

  useEffect(() => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localStorage.getItem("todos")));
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

  // 黑暗模式開關
  const themeHandler = () => {
    setDark(!dark);
  }

  return(
    <div className={'theme ' + (dark ? 'theme--dark' : 'theme--default')}>
      <div className="app__background">
        <div className="app__container">
          <input className="app__color-switch" onClick={themeHandler} type="checkbox"/>
          <h1 className="app__header">待辦事項</h1>
          <Form setTodos={setTodos} todos={todos} setStatus={setStatus} setStars={setStars} stars={stars} completedNum={completedNum}/>
          <ErrandList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} stars={stars} setCompletedNum={setCompletedNum}/>
        </div>
      </div>
    </div>
  )
}

export default App;