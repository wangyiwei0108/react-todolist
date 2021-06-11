import React from 'react';
import Errand from './Errand';

const ErrandList = ({todos, setTodos, filteredTodos}) => {
  return (
    <div className="errandlist__container">
      {filteredTodos.map((todo, index) =>
        <Errand
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
          num={index}/>
      )}
    </div>
  )
} 

export default ErrandList;