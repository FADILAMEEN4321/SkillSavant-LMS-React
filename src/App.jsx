import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesComponents from './RoutesComponents';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import {AuthProvider} from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { googleClientId } from './services/constants'




function App() {


  return (
    <Router>
      <GoogleOAuthProvider clientId={googleClientId} >
      <AuthProvider>
      <Header/> 
      <RoutesComponents/>     
      <Footer/>
      <ToastContainer />
      </AuthProvider>
      </GoogleOAuthProvider>
    </Router>
  )
}

export default App
