import React, { useState, useRef, useEffect } from 'react';
import Rating from 'react-rating';

const Form = ({setTodos, todos, setStatus, setStars, stars, completedNum}) => {

  const [input, setInput] = useState('')
  const [pressedBtnAll, setPressedBtnAll] = useState(true);
  const [pressedBtnCom, setPressedBtnCom] = useState(false);
  const [pressedBtnUncom, setPressedBtnUncom] = useState(false);


  const inputHandler = (e) => {
    setInput(e.target.value);
  }

  const formHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, {text: input, completed: false, id: Math.random() * 1000, stars: stars}])
    setInput('');
  }

  const allHandler = () => {
    setStatus("all");
    setPressedBtnAll(true);
    setPressedBtnCom(false);
    setPressedBtnUncom(false);
  }

  const completedHandler = () => {
    setStatus("completed");
    setPressedBtnCom(true);
    setPressedBtnAll(false);
    setPressedBtnUncom(false);
  }

  const uncompletedHandler = () => {
    setStatus("uncompleted");
    setPressedBtnUncom(true);
    setPressedBtnCom(false);
    setPressedBtnAll(false);
  }

  const starHandler = (value) => {
    setStars(value);
  }

  const inputRef = useRef();

  useEffect(() => {
    const clickHandler = () => {
      inputRef.current.focus()
    }
      clickHandler()
  }, [])

  return(
    <div className="form__container">
      <form className="form__addbar" onSubmit={formHandler}>
        <div className="form__submit-btn" onClick={formHandler} type="submit">
          <p>&#43;</p>
        </div>
        <div className="form__input-rating">
          <input ref={inputRef} className="form__input" 
              value={input}
              onChange={inputHandler}
              placeholder="輸入事項"
              type="text">
          </input>
          <div className="form__rating">
            <Rating
              emptySymbol={<i className="form__empty-star far fa-star"></i>}
              fullSymbol={<i className="form__full-star fas fa-star"></i>}
              quiet={true}
              initialRating={1}
              stop={3}
              onClick={starHandler} />
          </div>
        </div>
      </form>
      <div className="form__filter">
        <div className={pressedBtnAll?"form__filter-all--pressed": "form__filter-all"} onClick={allHandler}>
          <p>全部 {todos.length}</p>
        </div>
        <div className={pressedBtnCom?"form__filter-com--pressed": "form__filter-com"} onClick={completedHandler}>
          <p>已完成 {completedNum}</p>
        </div>
        <div className={pressedBtnUncom?"form__filter-uncom--pressed": "form__filter-uncom"} onClick={uncompletedHandler}>
          <p>未完成 {todos.length - completedNum}</p>
        </div>
      </div>
    </div>
  )
}

export default Form;