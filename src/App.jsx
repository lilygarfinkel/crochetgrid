import './App.css';
import Container from "./components/pixelgrid/Container.jsx";
import Pattern from "./components/pattern/PatContainer.jsx";
import Login from './components/login.js'
import './App.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.js'

import React from "react";

function App() {
  
  return (
    <div className="App">
   <Header />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pattern_editor" element={<Container />} />
        <Route path="/pattern_viewer" element={<Pattern />} />
        <Route path="/Login" element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
