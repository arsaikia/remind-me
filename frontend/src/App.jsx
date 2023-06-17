import { useSelector, useDispatch } from 'react-redux';
import { getQuestions } from './actions/actions';
import { useState, useEffect } from 'react';
import Tab from './components/table'

const App = () => {

  // Get states using useSelector ( state->reducerName )
  const allQuestions = useSelector(state => state.questions.allQuestions);
  const solvedQuestions = useSelector(state => state.questions.solvedQuestions);
  const todoQuestions = useSelector(state => state.questions.todoQuestions);
  
  // Fire actions using dispatch -> fires action -> Watcher saga handles rest
  const dispatch = useDispatch();
  const fetchAllQuestions = () => dispatch(getQuestions());


  /**************************************************************
   * Handler Functions
  **************************************************************/


  
  /**************************************************************
   * Returns JSX from here
  **************************************************************/

  return (
    <>
    
    <div>
      <button type="submit" onClick={fetchAllQuestions}>Get Questions</button>
      <h2>All Questions</h2>
      <Tab data={allQuestions} />
    </div>

    <div>
      <h2>Today's</h2>
      <Tab data={todoQuestions} />
    </div>
    </>
  );
}

export default App;
