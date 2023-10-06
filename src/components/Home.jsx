import React, { useState } from 'react'
import logo from '../components/Header/big_logo.png'
import logovideo from '../components/pixelgrid/icons/logovideoy.mp4'
import './Home.css'
import svideo from './shoortvid.mp4'


function Home() {

  return (
    <div id='homepage'>
      <div id='head'>
        <video id='video' src={logovideo} width='400px' autoplay="true" onMouseEnter={e => e.target.play()} ></video>
      </div>
      <div id='buttons'>
        <div className='toprow'>
          <button className='green'>
            Start A Grid
          </button>
          <button className='green'>
            Start A Grid
          </button>
        </div>
        <button className='orange'>
          Login / Sign Up
        </button>
      </div>
    </div>
  )
}
export default Home;