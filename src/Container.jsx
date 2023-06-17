import React, { useState, useRef, useEffect } from "react"
import logo from './logo.png'
import './App.css';
import './Container.css';
import Grid from "./Grid.jsx";
import { HexColorPicker } from "react-colorful"
import { exportComponentAsPNG } from "react-component-export-image"

function Container() {
  const [panelWidth, setPanelWidth] = useState(16);
  const [panelHeight, setPanelHeight] = useState(16);
  const [selectedColor, setColor] = useState("#ffffff");
  const [stitch, setStitch] = useState(10);
  const [mode, setMode] = useState("grid");
  const [isClicked, setClick] = useState(false);
  const [bgFill, setBg] = useState(selectedColor);
  //0=default, 2=fill/reset
  const [drawMode, setDrawMode] = useState(0);
  const [zoom, setZoom] = useState(0);

  var grid = <Grid></Grid>

  const panelRef = useRef()

  function changeMode(e) {
    const m = e.target.value;
    setMode(m);
  }


  function changeStitch(e) {
    const s = e.target.value;
    if (s === "single") {
      setStitch(5)
    }
    else if (s === "double") {
      setStitch(10)
    }
    else if (s === "triple") {
      setStitch(15)
    }
  }

  function hideNav(e) {
    console.log(e.target.value)
    var x = e.target.value
    var options = document.getElementById("options");
    var save = document.getElementById("export");
    if (x === 'edit') {
      options.style.display = 'flex';
      save.style.display = 'none';
    }
    else if (x === 'save') {
      options.style.display = 'none';
      save.style.display = 'flex';
    }
  }


  function Reset() {
    setPanelHeight(16);
    setPanelWidth(16);
    setZoom(0);
    document.getElementById('sizew').value = '16';
    document.getElementById('sizeh').value = '16';
    var pixel = document.getElementsByClassName('pixel');
    for (var i = 0; i < pixel.length; i++) {
      pixel[i].style.backgroundColor = '#ffffff';
    }
    setBg('#ffffff');
    setDrawMode(2);
  }

  function Fill() {
    var pixel = document.getElementsByClassName('pixel');
    for (var i = 0; i < pixel.length; i++) {
      pixel[i].style.backgroundColor = selectedColor;
    }
    setBg(selectedColor);
    setDrawMode(2);
  }

  function Undo() {

  }

  function drawGrid() {
    grid = <Grid id='g' width={panelWidth} height={panelHeight} selectedColor={selectedColor} mode={mode} stitch={stitch} clicked={isClicked} drawMode={drawMode} bgFill={bgFill} zoom={zoom}></Grid>
    return grid;
  }

  useEffect(() => {
    drawGrid()
  }, [selectedColor, bgFill, drawMode])

  return (
    <div className="Container">
      <div className="header">
        <img className='head' src={logo} alt="Logo" id="logo" style={{ height: '20px' }} />
        <h1 className="head">crochetgrid</h1>
        <div className='headButtons'>
          <ul>
            <li><button>Login</button></li>
            <li><button value='edit' id='hidenav' onClick={(e) => { hideNav(e) }}>Edit</button></li>
            {/* <div  id='hidebox'className='hidebox'>collapse nav</div> */}
            <li><button value='save' id='hidenav' onClick={(e) => { hideNav(e) }}>Save</button></li>
          </ul>
        </div>
      </div>
      <div className='page'>
        <div id="navbar" className="navbar">
          <div id="options">
            <div className="option">
              <span>Grid Type:</span>
              <select
                className="panelInput"
                defaultValue='grid'
                onChange={e => {
                  changeMode(e)
                }}>
                <option name="grid"> grid</option>
                <option name="offset">offset</option>
              </select>
            </div>
            <div className="option">
              <span>Stitch Size:</span>
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
              <span>Width:</span>
              <input
                type="number"
                id='sizew'
                className="panelInput"
                defaultValue={panelWidth}
                onChange={e => {
                  setPanelWidth(e.target.value)
                }}
              />
            </div>
            <div className="option">
              <span>Height:</span>
              <input
                type="number"
                id='sizeh'
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
              <button
                className="export"
                value='undo'
                onClick={() => Undo()}>
                Undo</button>
              <button
                className="export"
                value='reset'
                onClick={Reset}>
                Reset</button>
              <button
                className="export"
                value='fill'
                onClick={Fill}>
                Fill </button>
            </div>
            <div className='exps'>
              <button className='export' onClick={() => { setZoom(zoom + 1) }}>Zoom In</button>
              <button className='export' onClick={() => { setZoom(zoom - 1) }}>Zoom Out</button>
            </div>
          </div>
          <div id='export'>
            <button
              className="export"
              value='fill'
              onClick={() => exportComponentAsPNG(panelRef, { html2CanvasOptions: { backgroundColor: null } })}>
              Export</button>
          </div>

        </div>
        <div className="gridcontainer" onMouseDown={() => { setClick(true); }} onMouseUp={() => { setClick(false); }}  >
          <div className="grid" id='grid' ref={panelRef}>
            {drawGrid()}
          </div>
        </div>
      </div>
    </div>

  );
}

export default Container;
