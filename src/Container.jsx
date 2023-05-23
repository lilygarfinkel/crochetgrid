import React, { useState, useRef } from "react"
import logo from './logo.png'
import './App.css';
import './Container.css';
import Grid from "./Grid.jsx";
import { HexColorPicker } from "react-colorful"
import { exportComponentAsPNG } from "react-component-export-image"

function Container() {
  const [panelWidth, setPanelWidth] = useState(16)
  const [panelHeight, setPanelHeight] = useState(16)
  const [selectedColor, setColor] = useState("#f44336");
  const [mode, setMode] = useState("grid");
  var pstyle = 10;
  
  const [stitch, setStitch] = useState(pstyle);
  var grid = <Grid></Grid>
  const [currGrid, setGrid] = useState(grid)
  const [oldGrid, setOldGrid] = useState(currGrid)

  const panelRef = useRef()

  function changeMode(e) {
    const m = e.target.value;
    setMode(m);
  }


  function changeStitch(e) {
    const s = e.target.value;
    if(s === "single"){
      console.log("s")

      setStitch(5)
    }
    else if(s === "double"){
      console.log("d")

      setStitch(10)

    }
    else if(s=== "triple"){
      console.log("t")

      setStitch(15)
    }
    //pstyle = stitch+"px;";
     }

     function hideNav(){
      var nav = document.getElementById("options");
      var but = document.getElementById('hidenav');
      if(nav.style.display === 'none'){
          nav.style.display = 'flex';
          but.textContent = "⮝";}
       else{
          nav.style.display = 'none';
          but.textContent = "⮟";}
     }


  function drawGrid() {
    grid = <Grid width={panelWidth} height={panelHeight} selectedColor={selectedColor} mode={mode} stitch={stitch}></Grid>

    return grid;
  }

  return (
    <div className="App">

      <div className="navbar" id='navbar'>
      <img className= 'head' src={logo} alt="Logo" style={{height: '20px'}}/>
        <h1 className="head">crochetgrid</h1>
        <div id="options">
          <div id='mode'>
          <div className="option">
            <select
              className="panelInput"
              defaultValue='double'
              // value={stitch}
              onChange={e => {
                changeStitch(e)
              }}>
              <option name="single"> single</option>
              <option name="double">double</option>
              <option name="triple">triple</option>
            </select>
            <span>Stitch Size</span>
          </div>
          <div className="option">
            <select
              className="panelInput"
              defaultValue='grid'
              onChange={e => {
                changeMode(e)
              }}>
              <option name="grid"> grid</option>
              <option name="offset">offset</option>
              <option name="square">square</option>
            </select>
            <span>Grid Type</span>
          </div>
          </div>
          <div className="sizes">
            <div className="option">
              <input
                type="number"
                className="panelInput"
                defaultValue={panelWidth}
                onChange={e => {
                  setPanelWidth(e.target.value)
                }}
              />
              <span>Width</span>
            </div>
            <div className="option">
              <input
                type="number"
                className="panelInput"
                defaultValue={panelHeight}
                onChange={e => {
                  setPanelHeight(e.target.value)
                }}
              />
              <span>Height</span>
            </div>
          </div>
          <div className="small">
            <HexColorPicker color={selectedColor} onChange={setColor} />
          </div>
          <button className="export" onClick={() => exportComponentAsPNG(panelRef, { html2CanvasOptions: {backgroundColor: null} })}>
            Export</button>
        </div>
        <div>
          <button className="hidenav" id='hidenav' onClick={hideNav}>⮝</button>
        </div>
      </div>
      
      <div className="grid" ref={panelRef} > {drawGrid()}</div>

    </div>
  );
}

export default Container;
