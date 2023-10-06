import './App.css';
import Container from "./components/pixelgrid/Container.jsx";
import Pattern from "./components/pattern/PatContainer.jsx";
import Login from './components/Login.js'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Files from './components/Files.js'


import React from "react";
// import {Auth} from 'aws-amplify'
function App() {


  return (
    <div className="App">
   <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/pattern_editor" element={<Container />} />
        <Route path="/pattern_viewer" element={<Pattern />} />
        <Route path="/login"   element={<Login />} />
        <Route path="/files"   element={<Files />} />
      </Routes>

    </div>
  );
}

export default App;
