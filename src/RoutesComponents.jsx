import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Home from './components/home/Home.jsx';
import LoginPage from './components/home/LoginPage';
import SignupPage from './components/home/SignupPage';


const RoutesComponents = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} exact></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/signup' element={<SignupPage/>}></Route>
    </Routes>
  )
}

export default RoutesComponents