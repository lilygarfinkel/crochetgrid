import React, { useState, useRef } from "react"
import logo from './logo.png'
import './App.css';
import './Container.css';
import Grid from "./Grid.jsx";
import { HexColorPicker } from "react-colorful"
import { exportComponentAsPNG } from "react-component-export-image"

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

  const [isClicked, setClick] = useState(false);


  const [saveBar, setSB] = useState(false);
  const [editBar, setEB] = useState(false);

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

  function hideNav(e) {
    console.log(e.target.value)
    var x = e.target.value
    var options = document.getElementById("options");
    var save = document.getElementById("export");
   if (x === 'edit') {
      console.log('here')
      options.style.display = 'flex';
      save.style.display = 'none';
    }
    else if(x === 'save') {
      options.style.display = 'none';
      save.style.display = 'flex';
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
    grid = <Grid width={panelWidth} height={panelHeight} selectedColor={selectedColor} mode={mode} stitch={stitch} clicked={isClicked}></Grid>
    //saveGrid(g, grid);
    return grid;
  }

  return (
    <div className="Container">
      <div className='page'>
        <div className="header">
          <img className='head' src={logo} alt="Logo" id="logo" style={{ height: '20px' }} />
          <h1 className="head">crochetgrid</h1>
          <div className ='headButtons'>
          <ul>
            <li><button>Login</button></li>
            <li><button value='edit' id='hidenav' onClick={(e) => {hideNav(e)}}>Edit</button></li>
            {/* <div  id='hidebox'className='hidebox'>collapse nav</div> */}
            <li><button value='save' id='hidenav' onClick={(e) => { hideNav(e) }}>Save</button></li>
          </ul>
          </div>
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

                <button className="export" onClick={() => Undo()}>
                  Undo</button>
                
              </div>
              <div id='export'>  
              <button id="export" className="export" onClick={() => exportComponentAsPNG(panelRef, { html2CanvasOptions: { backgroundColor: null } })}>
              Export</button> 
              </div>
            </div>
        
      
          </div>

          
        <div className="gridcontainer"  onMouseDown={() => {setClick(true)}}onMouseUp={() => {setClick(false)}} >
          <div className="grid" ref={panelRef} > {drawGrid()}</div>
        </div>
      </div>
    </div>

  );
}

export default Container;
