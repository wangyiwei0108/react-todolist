import React from 'react';
import Errand from './Errand';

const ErrandList = ({todos, setTodos, filteredTodos, setCompletedNum}) => {

  return (
    <div className="errandlist__container">
      {filteredTodos.map((todo, index) => 
        <Errand
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
          num={index}
          stars={todo.stars}
          setCompletedNum={setCompletedNum}/>
      )}
    </div>
  )
} 

export default ErrandList;