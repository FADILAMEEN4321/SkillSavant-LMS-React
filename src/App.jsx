import React from 'react';
import { BrowserRouter as Router,Route,Routes,useLocation } from 'react-router-dom';
import RoutesComponents from './RoutesComponents';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import {AuthProvider} from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleOAuthProvider } from '@react-oauth/google';




function App() {

const googleClientId = import.meta.env.VITE_APP_GOOGLE_CLIENT_ID

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
