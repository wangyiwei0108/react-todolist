import React, {useState} from 'react';
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

  console.log(todos);

  return(
    <div className="form__container">
      <form className="form__addbar" onSubmit={formHandler}>
        <h3>我要完成</h3>
        <input value={input} onChange={inputHandler} type="text"></input>
        <h3>，重要程度是</h3>
        <div className="form__rating">
          <Rating
            emptySymbol={<svg><use xlinkHref="images/sprite.svg#icon-star-outlined"></use></svg>}
            fullSymbol={<svg><use xlinkHref="images/sprite.svg#icon-star"></use></svg>}
            quiet={true}
            stop={3}
            onClick={starHandler} />
        </div>
        <h3>，確定</h3>
        <div className="form__submit-btn" onClick={formHandler} type="submit">
          <h3>送出</h3>
        </div>
        <h3>。</h3>
      </form>
      <div className="form__filter">
        <div className={pressedBtnAll?"form__filter-all--pressed": "form__filter-all"} onClick={allHandler}>總共 {todos.length} 項</div>
        <div className={pressedBtnCom?"form__filter-com--pressed": "form__filter-com"} onClick={completedHandler}>已完成 {completedNum} 項</div>
        <div className={pressedBtnUncom?"form__filter-uncom--pressed": "form__filter-uncom"} onClick={uncompletedHandler}>未完成 {todos.length - completedNum} 項</div>
      </div>
    </div>
  )
}

export default Form;