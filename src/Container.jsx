import React, { useState, useRef } from "react"
import logo from './logo.png'
import './App.css';
import './Container.css';
import Grid from "./Grid.jsx";
import { HexColorPicker } from "react-colorful"
import { exportComponentAsPNG } from "react-component-export-image"
import { OnDeviceTraining } from "@mui/icons-material";

function Container() {
  const [panelWidth, setPanelWidth] = useState(16);
  const [panelHeight, setPanelHeight] = useState(16);
  const [selectedColor, setColor] = useState("#f44336");
  const [mode, setMode] = useState("grid");
  var pstyle = 10;
  const [stitch, setStitch] = useState(pstyle);
  var grid = <Grid></Grid>
  const [currGrid, setCurrGrid] = useState(grid);
  const [oldGrid, setOldGrid] = useState(grid);

  const panelRef = useRef()

  function changeMode(e) {
    const m = e.target.value;
    setMode(m);
  }


  function changeStitch(e) {
    const s = e.target.value;
    if (s === "single") {
      console.log("s")
      setStitch(5)
    }
    else if (s === "double") {
      console.log("d")
      setStitch(10)
    }
    else if (s === "triple") {
      console.log("t")
      setStitch(15)
    }
  }

  function hideNav() {
    var nav = document.getElementById("navbar");
    // var but = document.getElementById('hidenav');
    // var box = document.getElementById("hidebox");
    if (nav.style.display === 'none') {
      nav.style.display = 'flex';
      // but.style.left ='25vw';
      // but.textContent = "<";
      // box.textContent = "display nav";
      // box.style.left ='calc(25vw + 20px)';
    }
    else {
      nav.style.display = 'none';
      // but.textContent = ">";
      // but.style.left ='0vw';
      // box.textContent = "hide nav";
      // box.style.left ='20px';

    }
  }

  function Undo() {

  }

  function saveGrid(g, grid) {
    if (oldGrid !== g) {
      setOldGrid(g);
    }
    if (currGrid !== g) {
      setCurrGrid(grid);
    }

    console.log(currGrid);
    console.log(oldGrid);
  }


  function drawGrid() {
    var g = grid;
    grid = <Grid width={panelWidth} height={panelHeight} selectedColor={selectedColor} mode={mode} stitch={stitch}></Grid>
    //saveGrid(g, grid);
    return grid;
  }

  return (
    <div className="App">
      <div className='page'>
        <div className="header">
          <img className='head' src={logo} alt="Logo" id="logo" style={{ height: '20px' }} />
          <h1 className="head">crochetgrid</h1>
          <ul>
            <li><p>Login</p></li>
            <li><p  id='hidenav' onClick={hideNav}>Edit</p></li>
            <div  id='hidebox'className='hidebox'>collapse nav</div>
            <li><p>Save</p></li>
          </ul>
        </div>
        <div id="navbar" className="navbar">
          <div id="options">
            <div className="option">
              <span>Stitch Size</span>
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
            </div>
            <div className="option">
              <span>Grid Type</span>
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
            </div>
            <div className="option">
              <span>Width</span>
              <input
                type="number"
                className="panelInput"
                defaultValue={panelWidth}
                onChange={e => {
                  setPanelWidth(e.target.value)
                }}
              />
            </div>
            <div className="option">
              <span>Height</span>
              <input
                type="number"
                className="panelInput"
                defaultValue={panelHeight}
                onChange={e => {
                  setPanelHeight(e.target.value)
                }}
              />
            </div>
            <div className="small">
              <HexColorPicker color={selectedColor} onChange={setColor} />
            </div>
            <div className='exps'>
              <button className="export" onClick={() => exportComponentAsPNG(panelRef, { html2CanvasOptions: { backgroundColor: null } })}>
                Export</button>
              <button className="export" onClick={() => Undo()}>
                Undo</button>
            </div>
          </div>

        </div>

        <div className="grid" ref={panelRef} > {drawGrid()}</div>

      </div>
    </div>
  );
}

export default Container;
