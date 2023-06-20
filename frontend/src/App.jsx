import { useSelector, useDispatch } from 'react-redux';
import { getQuestions } from './actions/actions';
import { groupBy } from './utils/groupBy'
import { useState, useEffect } from 'react';
import Tab from './components/Tab'
import logo from './logo.png';
import { useCookies } from 'react-cookie';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Container } from './styles';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';


const App = () => {

  const [cookies, setCookie, removeCookie] = useCookies(['userId', 'openTab']);

  // Get states using useSelector ( state->reducerName )
  const allQuestions = useSelector(state => state.questions.allQuestions);
  const solvedQuestions = useSelector(state => state.questions.solvedQuestions);
  const todoQuestions = useSelector(state => state.questions.todoQuestions);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const userIdInAuthStore = useSelector(state => state.auth.userId);

  const userIdInCookie = cookies.userId;
  const userId = userIdInCookie || userIdInAuthStore;

  const tabCookie = cookies.openTab;

  // Fire actions using dispatch -> fires action -> Watcher saga handles rest
  const dispatch = useDispatch();
  const fetchAllQuestions = (userId) => dispatch(getQuestions(userId));

  // Load all question when the app first loads/ user signs in
  useEffect(() => {
    fetchAllQuestions(userId);
  }, [userId])
  
  // Set cookie when user logs in
  useEffect(() => {
    if (!isAuthenticated) {
      return
    }
    setCookie('userId', userId, { path: '/' });
  }, [isAuthenticated])
  
  

  /**************************************************************
   * Handler Functions
  **************************************************************/
  

  const Todo = () => {

    return (
      <>
      <div>
        <h2>Today's</h2>
        <Tab data={todoQuestions} isOpen isRecap userId={userId} />
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
              userId={userId}
              isOpen={tabCookie === group}
              tabCookie={tabCookie}
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
          <Route path="/signup" element={ <Signup/>} />
          <Route path="/login" element={ <Login/>} />
          <Route path="/all" element={ <All/>} />
        </Routes>
      </Container>
      
      
    
    </Router>
  );
}

export default App;
