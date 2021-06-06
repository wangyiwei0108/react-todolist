import React, {useState} from 'react';

const Card = ({todo, todos, setTodos}) => {

  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState('');

  const doneHandler = () => {
    setTodos(todos.map(item => {
      if(item.id === todo.id) {
        return {
          ...item, completed: !item.completed
        }
      }
      return item
    }))
  }

  const removeHandler = () => {
    setTodos(todos.filter(item => item.id !== todo.id))
  }

  const editHandler = () => {
    setEditing(!editing);
  }

  const newInputHandler = (e) => {
    setNewText(e.target.value);
  }

  const confirmHandler = () => {
    setTodos(
      todos.map((item) => {
        if(item.id === todo.id) {
          return {
            ...item, text: newText
          }
        }
        return item
      })
    )
    setEditing(false);
  }

  const cancleHandler = () => {
    setEditing(false);
  }

  return(
    <div>
      {editing 
      ?
      <form>
        <input type="text" placeholder={todo.text} onChange={newInputHandler} ></input>
        <button onClick={confirmHandler}>confirm</button>
        <button onClick={cancleHandler}>cancle</button>
      </form>
      :
      <div>
        <p className={todo.completed? "completed" : ""}>{todo.text}</p>
        <button onClick={editHandler}>edit</button>
        <button onClick={doneHandler}>done</button>
        <button onClick={removeHandler}>remove</button>
      </div>
      }
    </div>
  )
}

export default Card;