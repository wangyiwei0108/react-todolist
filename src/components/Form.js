import React, {useState} from 'react';

const Form = ({setTodos, todos, setStatus}) => {

  const [input, setInput] = useState('')

  const inputHandler = (e) => {
    setInput(e.target.value);
  }

  const formHandler = () => {
    setTodos([...todos, {text: input, completed: false, id: Math.random() * 1000}])
    setInput('');
  }

  const optionHandler = (e) => {
    setStatus(e.target.value);
  }

  return(
    <div>
      <form>
        <input value={input} onChange={inputHandler} type="text"></input>
        <button onClick={formHandler}>confirm</button>
      </form>
      <select onChange={optionHandler}>
        <option value="all">all</option>
        <option value="completed">completed</option>
        <option value="uncompleted">uncompleted</option>
      </select>
    </div>
  )
}

export default Form;