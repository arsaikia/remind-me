import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

import {
  Route, Navigate, BrowserRouter as Router, Routes,
} from "react-router-dom";
import Tab from "./components/Tab";
import { getQuestions } from "./actions/actions";
import { Container } from "./styles";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Playground from "./pages/Playground";
// import AllRoutes from "./AllRoutes";
import Error from "./pages/Error";
import Todo from "./components/Todo";
import All from "./components/All";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["userId", "openTab", "name"]);

  // Get states using useSelector ( state->reducerName )
  const allQuestions = useSelector((state) => state.questions.allQuestions);
  // const solvedQuestions = useSelector((state) => state.questions.solvedQuestions);
  const todoQuestions = useSelector((state) => state.questions.todoQuestions);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userIdInAuthStore = useSelector((state) => state.auth.userId);
  const userNameIdInAuthStore = useSelector((state) => state.auth.firstName);

  const userIdInCookie = cookies.userId;
  const userId = userIdInCookie || userIdInAuthStore;

  const tabCookie = cookies.openTab;

  // Fire actions using dispatch -> fires action -> Watcher saga handles rest
  const dispatch = useDispatch();
  const fetchAllQuestions = (userId) => dispatch(getQuestions(userId));

  // Load all question when the app first loads/ user signs in
  useEffect(() => {
    fetchAllQuestions(userId);
  }, [userId]);

  // Set cookie when user logs in
  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }
    setCookie("userId", userId, { path: "/" });
    setCookie("name", userNameIdInAuthStore, { path: "/" });
  }, [isAuthenticated]);

  /** ************************************************************
   * Handler Functions
  ************************************************************* */

  const allQuestionsProps = { allQuestions, userId, tabCookie };
  const todoProps = { todoQuestions, isOpen: true, isRecap: true, userId };

  /** ************************************************************
   * Returns JSX from here
  ************************************************************* */

  return (
    <Router>
      <Navbar />
      {/* Reserved space taken by the absolute Navbar */}
      <Container
        width="100%"
        height="8vh"
      />

      <Container width="90%" padding="0 5%">
        <Routes>
          <Route path="/" element={<Todo {...todoProps} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/all" element={<All {...allQuestionsProps} />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/404" element={<Error />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </Container>

    </Router>
  );
}

export default App;
