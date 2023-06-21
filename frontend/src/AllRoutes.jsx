import React from 'react';
import { Route, Navigate, BrowserRouter as Router, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Playground from './pages/Playground';
import Error from './pages/Error';
import Todo from './components/Todo';
import All from './components/All';

const AllRoutes = (props) => {
  const { allQuestionsProps, todoProps } = props;

  return (
    <>
      <Routes>
        <Route path="/" element={<All {...allQuestionsProps} />} />
        <Route path="/todo" element={<Todo {...todoProps} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </>
  )
}

export default AllRoutes;