import React, { useState } from 'react'
import logo from './gridgraph.png'
import logovideo from '../components/pixelgrid/icons/logovideoy.mp4'
import './Home.css'
import svideo from './shoortvid.mp4'
import src from './befgridpaper.png'



function Home() {

  return (
    <div id='homepage'>
      {/*  style={{backgroundImage:"url(" + src + ")"}} */}
      <div id='head'>
        {/* <video id='video' src={logovideo} width='400px' autoplay='true' onClick={e => e.target.play()} ></video> */}
        <div ><img src={logo} id='video'></img></div>
      </div>
      <div id='buttons'>
        <div className='toprow'>
          <a href='/pattern_editor'>
             <button className='green'> Start A Grid</button>
          </a>
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
  )
}
export default Home;