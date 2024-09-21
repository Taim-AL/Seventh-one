import React from 'react';
import './App.css';
import './assets/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import Home from './components/Home';
import Project from './components/Project';
import Contact from './components/Contact';
import AboutUs from './Section/AboutUs';
import Services from './Section/Services';
function App() {
  return (
    <> 
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} path='/'/> 
        <Route  element={<AboutUs/>} path='about'/> 
        <Route  element={<Services/>} path='servrce'/> 
        <Route  element={<Project/>} path='project'/> 
        <Route  element={<Contact/>} path='contact'/> 
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;
