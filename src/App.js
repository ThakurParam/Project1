import React from 'react'

import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Book1 from './Book1';
import Book3 from './Book3';
import Book4 from './Book4';
import Book2 from './Book2';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';



function App() {
  return (
   <>
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Book1' element={<Book1/>}/>
      <Route path='/Book2' element={<Book2/>}/>
      <Route path='/Book3' element={<Book3/>}/>
      <Route path='/Book4' element={<Book4/>}/>

    </Routes>
  </Router>
 
   
   </>
  );
}

export default App;
