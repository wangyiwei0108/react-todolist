import React, {useState, useEffect} from 'react';
import Rating from 'react-rating';

const Errand = ({todo, todos, setTodos, num, stars, setCompletedNum}) => {

  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState('');

  useEffect(() => {
    const completedTodos = todos.filter(item => {
      return item.completed === true;
    })
    setCompletedNum(completedTodos.length);
  }, [todos, setCompletedNum])

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

  const starHandler = (value) => {
    setTodos(
      todos.map((item) => {
        if(item.id === todo.id) {
          return {
            ...item, stars: value
          }
        }
        return item
      })
    )
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
              <svg><use xlinkHref="images/sprite.svg#icon-check"></use></svg>
            </div>
            <div onClick={cancleHandler}>
              <svg><use xlinkHref="images/sprite.svg#icon-cross"></use></svg>
            </div>
          </div>
        </form>
      :
      <div draggable="true" className="errand__notediting">
        <div className="errand__stars">
        <Rating
            emptySymbol={<svg><use xlinkHref="images/sprite.svg#icon-star-outlined"></use></svg>}
            fullSymbol={<svg><use xlinkHref="images/sprite.svg#icon-star"></use></svg>}
            quiet={true}
            stop={3}
            initialRating={stars}
            onClick={starHandler}/>
        </div>
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