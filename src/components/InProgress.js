import React from 'react';
import Badge from './Badge';

function InProgress(props) {
  const { todos } = props;
  const todoNum = todos.length;
  return (
    <div className='card'>
      <div className='card-header alert-dark d-flex justify-content-between align-items-center '>
        ToDos
        <Badge title='Tasks' num={todoNum} />
      </div>
      <ul>
        {todos.map(todo => {
          if (todo.inProgress === true) {
            return <li key={todo.id}>{todo.text}</li>;
          }
        })}
      </ul>
    </div>
  );
}

export default InProgress;
