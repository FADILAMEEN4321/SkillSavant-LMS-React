import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesComponents from './RoutesComponents';
import Header from './components/common/Header';
import Footer from './components/common/Footer';



function App() {

  return (
    <Router>
      <Header/>
      <RoutesComponents/>
      <Footer/>
    </Router>
  )
}

export default App
