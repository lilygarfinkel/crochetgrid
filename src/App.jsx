import './App.css';
import Container from "./components/pixelgrid/Container.jsx";
import Pattern from "./components/pattern/PatContainer.jsx";
import Login from './pages/Login/Login.js'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Files from './pages/Files/Files.js'


import React from "react";
// import {Auth} from 'aws-amplify'
function App() {


  return (
    <div className="App">
   <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pattern_editor" element={<Container />} />
        <Route path="/pattern_viewer" element={<Pattern />} />
        <Route path="/login"   element={<Login />} />
        <Route path="/files"   element={<Files />} />
      </Routes>

    </div>
  );
}

export default App;
