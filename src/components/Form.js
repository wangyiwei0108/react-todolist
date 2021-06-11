import React, {useState} from 'react';

const Form = ({setTodos, todos, setStatus}) => {

  const [input, setInput] = useState('')
  const [pressedBtnAll, setPressedBtnAll] = useState(true);
  const [pressedBtnCom, setPressedBtnCom] = useState(false);
  const [pressedBtnUncom, setPressedBtnUncom] = useState(false);

  const inputHandler = (e) => {
    setInput(e.target.value);
  }

  const formHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, {text: input, completed: false, id: Math.random() * 1000}])
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

  return(
    <div className="form__container">
      <form className="form__addbar" onSubmit={formHandler}>
        <input value={input} onChange={inputHandler} type="text"></input>
        <div onClick={formHandler} type="submit">
          <svg><use xlinkHref="images/sprite.svg#icon-circle-with-plus"></use></svg>
        </div>
      </form>
      <div className="form__filter">
        <div className={pressedBtnAll?"form__filter-all--pressed": "form__filter-all"} onClick={allHandler}>全部</div>
        <div className={pressedBtnCom?"form__filter-com--pressed": "form__filter-com"} onClick={completedHandler}>已完成</div>
        <div className={pressedBtnUncom?"form__filter-uncom--pressed": "form__filter-uncom"} onClick={uncompletedHandler}>未完成</div>
      </div>
    </div>
  )
}

export default Form;