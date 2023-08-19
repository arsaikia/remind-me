/* eslint-disable react/prop-types */
import React from 'react';

import Tab from './Tab';

function Todo(props) {
  const {
    // isOpen,
    // isRecap,
    todoQuestions,
    userId,
  } = props;
  return (
    <div>
      <h2>{'Today\'s'}</h2>
      <Tab data={todoQuestions} isOpen isRecap userId={userId} />
    </div>
  );
}

export default Todo;
