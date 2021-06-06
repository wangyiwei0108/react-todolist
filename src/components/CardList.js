import React from 'react';
import Card from './Card';

const CardList = ({todos, setTodos, filteredTodos}) => {
  return (
    <div>
      {filteredTodos.map(todo => <Card key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>)}
    </div>
  )
}

export default CardList;