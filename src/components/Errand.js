import React, {useState} from 'react';

const Errand = ({todo, todos, setTodos, num}) => {

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

  const confirmHandler = (e) => {
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
    <div className="errand__container">
      {editing 
      ?
        <form className="errand__editing" onSubmit={confirmHandler}>
          <p className={todo.completed? "errand__completed--num errand__num" : "errand__num"}>{num + 1}</p>
          <input onDoubleClick={confirmHandler} type="text" value={newText} placeholder={todo.text} onChange={newInputHandler}></input>
          <div className="errand__editing-btns">
            <div onClick={confirmHandler} type="submit">
              <svg><use xlinkHref="images/sprite.svg#icon-circle-with-plus"></use></svg>
            </div>
            <div onClick={cancleHandler}>
              <svg><use xlinkHref="images/sprite.svg#icon-circle-with-cross"></use></svg>
            </div>
          </div>
        </form>
      :
      <div className="errand__notediting">
        <div className="errand__notediting-content" onClick={doneHandler}>
          <p className={todo.completed? "errand__completed--num errand__num" : "errand__num"}>{num + 1}</p>
          <p className={todo.completed? "errand__completed--text" : ""}>{todo.text}</p>
        </div>
        <div className="errand__notediting-btns">
          <div onClick={editHandler}>
            <svg><use xlinkHref="images/sprite.svg#icon-pencil"></use></svg>
          </div>
          <div onClick={removeHandler}>
            <svg><use xlinkHref="images/sprite.svg#icon-cup"></use></svg>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default Errand;