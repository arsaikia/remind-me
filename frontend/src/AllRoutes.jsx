import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Playground from './pages/Playground';
import Error from './pages/Error';


const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/all" element={<All />} />
        <Route path="/playground" element={<Playground />} />
        <Route component={Error} />
      </Routes>
    </>
  )
}

export default AllRoutes;