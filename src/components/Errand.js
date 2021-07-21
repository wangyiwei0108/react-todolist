import React, {useState, useEffect, useRef} from 'react';
import Rating from 'react-rating';

const Errand = ({todo, todos, setTodos, num, stars, setCompletedNum}) => {

  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState('');

  // 計算已完成 errand 的數量
  useEffect(() => {
    const completedTodos = todos.filter(item => {
      return item.completed === true;
    })
    setCompletedNum(completedTodos.length);
  }, [todos, setCompletedNum])

  // 標註 errand 已完成
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

  // 刪除：errand
  const removeHandler = () => {
    setTodos(todos.filter(item => item.id !== todo.id))
  }

  // 編輯：errand 狀態
  const editHandler = () => {
    setEditing(!editing);
  }

  // 編輯：errand 內容
  const newInputHandler = (e) => {
    setNewText(e.target.value);
  }

  // 編輯：errand 內容確定發送
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

  // 編輯：errand 取消編輯
  const cancleHandler = () => {
    setEditing(false);
  }

  // 編輯：星星數量
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

  // 當是正在編輯中的狀態時，促發按下 input tag 讓 input 是閃爍顯示
  const inputRef = useRef();

  useEffect(() => {
    const clickHandler = () => {
      inputRef.current.focus()
    }
    if(editing){
      clickHandler()
    }
  }, [editing])

  return(
    <div className="errand__container">
      {editing
      ? // 在編輯中
        
        <form className="errand__editing" onSubmit={confirmHandler}>
          <p className={todo.completed? "errand__completed--num errand__num" : "errand__num"}>{num + 1}</p>
          <div className="errand__editing-input">
            <input ref={inputRef} type="text" value={newText} placeholder="輸入修改事項" onChange={newInputHandler}></input>
          </div>
          <div className="errand__editing-btns">
            <i onClick={cancleHandler} className="fas fa-undo"></i>
            <i onClick={confirmHandler} type="submit" className="far fa-check-square"></i>
          </div>
        </form>

      :  // 沒有在編輯
      
        <div className="errand__notediting">
          <p className={todo.completed? "errand__completed--num errand__num" : "errand__num"}>{num + 1}</p>
          <div className="errand__stars">
          <Rating
              emptySymbol={<i className="far fa-star"></i>}
              fullSymbol={<i className="fas fa-star"></i>}
              quiet={true}
              stop={3}
              initialRating={stars}
              onClick={starHandler}/>
          </div>
          <div className="errand__notediting-content" onClick={doneHandler}>
            <p className={todo.completed? "errand__completed--text" : ""}>{todo.text}</p>
          </div>
          <div className="errand__notediting-btns">
            <div onClick={editHandler}>
              <i className="far fa-edit"></i>
            </div>
            <div onClick={removeHandler}>
              <i className="far fa-trash-alt"></i>
            </div>
          </div>
      </div>
      }
    </div>
  )
}

export default Errand;