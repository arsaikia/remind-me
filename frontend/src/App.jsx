import { useSelector, useDispatch } from 'react-redux';
import { getQuestions } from './actions/actions';
import { groupBy } from './utils/groupBy'
import { useState, useEffect } from 'react';
import Tab from './components/Tab'
import logo from './logo.png';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Container } from './styles';
import Navbar from './components/Navbar';


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
  

  const Todo = () => {

    return (
      <>
      <div>
        <h2>Today's</h2>
        <Tab data={todoQuestions} isOpen isRecap />
      </div>
    </>)
  }

  const All = () => {

    return (
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
      </div>
    )

  }
  
  /**************************************************************
   * Returns JSX from here
  **************************************************************/


  return (
    <Router>
      <Navbar />
      {/* Reserved space taken by the absolute Navbar */}
      <Container
        width={"100%"}
        height={"8vh"}
      />

      <Container width={'90%'} padding={'0 5%'}>
        <Routes>
        <Route path="/" element={ <Todo/>} />
        <Route path="/all" element={ <All/>} />
        </Routes>
      </Container>
      
      
    
    </Router>
  );
}

export default App;
