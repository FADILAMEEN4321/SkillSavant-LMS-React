import React from 'react';
import { BrowserRouter as Router,Route,Routes,useLocation } from 'react-router-dom';
import RoutesComponents from './RoutesComponents';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import {AuthProvider} from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InstructorProfilePage from './components/instructor_profile/InstructorProfilePage';


function App() {



  return (
    <Router>
      <AuthProvider>
      <Header/>
      <RoutesComponents/>
      <Footer/>
      <ToastContainer />
      </AuthProvider>
    </Router>
  )
}

export default App
