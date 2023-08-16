import React, { useState, useRef, useEffect } from "react"
import './Container.css';
import Grid from "../pixelgrid/Grid.jsx";
import Color from "../pixelgrid/Color.jsx";
import Symbol from './Symbol.jsx'
import gridicon from './icons/7.png'
import stitchicon from './icons/2.png'
import widicon from './icons/3.png'
import heiicon from './icons/4.png'
import outlineicon from './icons/5.png'
import fillicon from './icons/6.png'
import reseticon from './icons/1.png'
import saveicon from './icons/8.png'
import settingsicon from './icons/9.png'


import { HexColorPicker } from "react-colorful"
import { exportComponentAsPNG, exportComponentAsJPEG } from "react-component-export-image"


function Container() {
  const [panelWidth, setPanelWidth] = useState(15);
  const [panelHeight, setPanelHeight] = useState(15);
  const [selectedColor, setColor] = useState("#ff0000");
  const [stitch, setStitch] = useState(15);
  const [mode, setMode] = useState("grid");
  const [isClicked, setClick] = useState(false);
  const [bgFill, setBg] = useState(selectedColor);
  //0=default, 2=fill/reset
  const [drawMode, setDrawMode] = useState(0);
  const [zoom, setZoom] = useState(0);
  const [boldOutline, setBoldOutline] = useState(5);
  const [modeC, setModeC] = useState('set');

  const [hidden, setHidden] = useState('hidden');

  const [fname, setFName] = useState('untitled')

  var grid = <Grid></Grid>

  const panelRef = useRef()
  const panelRefp = useRef()

  function changeMode(e) {
    const m = e.target.value;
    setMode(m);
  }

  function changeOutline(e) {
    setBoldOutline(e.target.value);
  }


  function changeStitch(e) {
    const s = e.target.value;
    if (s === "single") {
      setStitch(10)
    }
    else if (s === "double") {
      setStitch(15)
    }
    else if (s === "triple") {
      setStitch(20)
    }
  }

  function Reset() {
    // setPanelHeight(15);
    // setPanelWidth(15);
    setZoom(0);
    // document.getElementById('sizew').value = '15';
    // document.getElementById('sizeh').value = '15';
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


  function initColors() {
    let colors = [];
    for (let i = 0; i < 8; i++) {
      let id = i.toString() + 'c'
      colors.push(<div onClick={() => { xuseColorX(id) }}> <Color selectedColor={selectedColor} id={id} mode={modeC} ></Color></div>)
    }
    return colors;
  }

  function drawGrid() {
    grid = <Grid id='g' width={panelWidth} height={panelHeight} selectedColor={selectedColor} mode={mode} stitch={stitch} clicked={isClicked} drawMode={drawMode} bgFill={bgFill} zoom={zoom} bold={boldOutline}></Grid>
    return grid;
  }

  function xuseColorX(id) {
    console.log(id);
    if (modeC === "use") {
      let colorToUse = document.getElementById(id)
      let color = colorToUse.style.backgroundColor;
      console.log(color)
      var colortohex = color.split("(")[1].split(")")[0];
      colortohex = colortohex.split(", ");
      var hex = colortohex.map(function (x) {
        x = parseInt(x).toString(16);
        return (x.length === 1) ? "0" + x : x;
      })
      hex = "#" + hex.join("");
      console.log(hex)
      setColor(hex);
      colorToUse.style.border = '1px solid white'
    }

  }

  function showColor() {
    if (modeC === 'use') {
      var cp = document.getElementById('colorpick');
      cp.style.display = 'flex';
      setModeC("set");
      var b = document.getElementById('showcolor');
      b.innerHTML = "v";
    }
    if (modeC == 'set') {
      var cp = document.getElementById('colorpick');
      cp.style.display = 'none';
      setModeC("use");
      var b = document.getElementById('showcolor');
      b.innerHTML = "^";
    }

  }
  function hideSettings() {
    let s = document.getElementById('settings');
    if (hidden) {
      setHidden(false);
      s.style.display = 'flex';
    }
    else {
      setHidden(true);
      s.style.display = 'none';
    }

  }

  function showText(e){
    console.log(e)
  }

  useEffect(() => {
    drawGrid();
  }, [bgFill, boldOutline])

  return (
    <div className="Container">
      <div className='page'>
        <div className='navContainer'>
          <div className='settings' id='settings'onMouseEnter={(e)=> {showText('settings')}} style={{ display: 'none' }}>
            <div id="options">
              <div className='size' id='gridOP'>
                <div >
                  <div className="option">
                    <Symbol src={gridicon} id="gicon" text= 'grid layout' />
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
                  <Symbol src={stitchicon} id="sticon" text= 'stitch size' />
                    <select
                      className="panelInput"
                      defaultValue='double'
                      onChange={e => {
                        changeStitch(e)
                      }}>
                      <option name="single"> single</option>
                      <option name="double">double</option>
                      <option name="triple">triple</option>
                    </select>
                  </div>
                </div>
                <div >
                  <div className="option">
                  <Symbol src={widicon} id="wicon" text= 'width' />
                    <input
                      type="number"
                      id='sizew'
                      className="panelInput"
                      defaultValue={panelWidth}
                      onChange={e => {
                        // setColor('white');
                        setPanelWidth(e.target.value);
                      }}
                    />
                  </div>
                  <div className="option">
                  <Symbol src={heiicon} id="hicon" text= 'height' />
                    <input
                      type="number"
                      id='sizeh'
                      className="panelInput"
                      defaultValue={panelHeight}
                      onChange={e => {
                        // setColor('white');
                        console.log(e.target.value)
                        setPanelHeight(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="option">
                <Symbol src={outlineicon} id="oicon" text= 'set outline frequency' />
                  <input
                    type="number"
                    id='outlineSize'
                    className="panelInput"
                    defaultValue={boldOutline}
                    onChange={e => {
                      // setColor('white');
                      console.log(e.target.value)
                      changeOutline(e);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div id="navbar" className="navbar">
            <button className='noBord'>
              <img src={settingsicon} alt="Logo" id="sticon" onClick={hideSettings} class='icon' style={{ height: '25px' }} />
            </button>
            <div className='inputC'>
              <input className='input' id='docname' type='text' value={fname} onChange={(e) => (setFName(e.target.value))}></input>
            </div>
            <div className='saveOP' id='saveOP'>
              <button
                className="noBord"
                id='saveOPs'
                value='export'
                onClick={() => exportComponentAsPNG(panelRef, { fileName: fname, html2CanvasOptions: { backgroundColor: null } })}>
                <img src={saveicon} alt="Logo" id="sicon" class='icon' style={{ height: '25px' }} />
              </button>
            </div>

            <div className='pattern'>
              <button
                className="export"
                id='savePat'
                value='export'
                onClick={() => exportComponentAsJPEG(panelRefp, { html2CanvasOptions: { backgroundColor: null } })}>
                Export</button>
            </div>
          </div>
        </div>
        <div className='snaptobtm'>
          <div className="gridcontainer" onMouseDown={() => { setClick(true); }} onMouseUp={() => { setClick(false); }}  >
            <div className="grid" id='grid' ref={panelRef}>
              {drawGrid()}
            </div>
          </div>
          <div className='colorpick' id='colorpick' style={{ display: 'none' }}>
            <div className="small" id='colorpicker' >
              <HexColorPicker color={selectedColor} onChange={setColor} />
            </div>
          </div>
          <div className="bottomnav">
            <div className='bottomnavbar'>
              <div className='zooms'>
                <span>Zoom:</span>
                <div className='exps'>
                  <button className='zoom' onClick={() => { setZoom(zoom - 1) }}>-</button>
                  <button className='zoom' onClick={() => { setZoom(zoom + 1) }}>+</button>
                </div>
              </div>

              <div className="colorCont">
                {initColors()}
                <button onClick={showColor} id='showcolor' className='zoom'>^</button>
                <div className='exps'>
                  <button
                    className="noBord"
                    value='reset'
                    onClick={Reset}>
                    <img src={reseticon} alt="Logo" id="ricon" class='icon' style={{ height: '25px' }} />
                  </button>
                  <button
                    className="noBord"
                    value='fill'
                    onClick={Fill}>
                    <img src={fillicon} alt="Logo" id="ficon" class='icon' style={{ height: '25px' }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Container;
