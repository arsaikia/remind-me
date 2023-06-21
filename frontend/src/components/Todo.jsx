import React from 'react'
import Tab from './Tab';

function Todo(props) {
  const { todoQuestions, isOpen, isRecap, userId } = props;
  return (
    <div>
      <h2>Today's</h2>
      <Tab data={todoQuestions} isOpen isRecap userId={userId} />
    </div>
  );
}

export default Todo;