import { useSelector, useDispatch } from 'react-redux';
import { getQuestions } from './actions/actions';
import { groupBy } from './utils/groupBy'
import { useState, useEffect } from 'react';
import Tab from './components/table'
import logo from './logo.png';

const App = () => {

  // Get states using useSelector ( state->reducerName )
  const allQuestions = useSelector(state => state.questions.allQuestions);
  const solvedQuestions = useSelector(state => state.questions.solvedQuestions);
  const todoQuestions = useSelector(state => state.questions.todoQuestions);
  
  // Fire actions using dispatch -> fires action -> Watcher saga handles rest
  const dispatch = useDispatch();
  const fetchAllQuestions = () => dispatch(getQuestions());

  // Load all question when the app first loads
  useEffect(() => {
    fetchAllQuestions();
  }, [])
  

  /**************************************************************
   * Handler Functions
  **************************************************************/
  

  
  /**************************************************************
   * Returns JSX from here
  **************************************************************/

  return (
    <>
    <img src={logo} style={{width: '80px', cursor: 'pointer'}} onClick={fetchAllQuestions} />
    <div>
      <h2>Today's</h2>
      <Tab data={todoQuestions} isOpen isRecap />
    </div>

    <div>
        <h2>Questions</h2>
        <div>
          {
            allQuestions.groups.map( group => <Tab
              key={group}
              data={allQuestions.questions[group]}
              group={group}
            />
          )}
        </div>
      {/* <Tab data={allQuestions} /> */}
    </div>
    </>
  );
}

export default App;
