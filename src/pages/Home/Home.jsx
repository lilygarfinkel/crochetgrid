import React, { useState } from 'react'
import logo from './gridgraph.png'
import './Home.css'




function Home() {

  function showOps() {
    var disp = document.getElementById('showops').style.display;
    if (disp === 'none') {
      document.getElementById('showops').style.display = 'flex';
    }
    if (disp === 'flex') {
      document.getElementById('showops').style.display = 'none';
    }

  }

  return (
    <div id='homepage'>
    
      {/*  style={{backgroundImage:"url(" + src + ")"}} */}
      {/* <div id='head'> */}
        {/* <div >
          <img src={logo} id='video'></img>
        </div> */}
      {/* </div> */}
      <div id='showops' style={{display:'none'}}> 
      <a href = '/pattern_editor'>
        <button className='orange'>blank grid</button> 
       </a>
        <button className='orange' >upload image</button> 
      </div>
      <div id='buttons' style={{marginTop:"50px"}}>
        <div className='toprow'>
          <button
            className='green'
            onClick={showOps}> Start A Grid</button>
          <button className='green'>
            View my Grids
          </button>
        </div>
        <div id='secondrow'>
          <a href='/login'>
            <button className='orange'> Login / Sign Up</button>
          </a>
        </div>
      </div>

    </div>
  );
}

export default Home;