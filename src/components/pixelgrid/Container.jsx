import React, { useState, useRef, useEffect } from "react"
import './Container.css';
import Grid from "../pixelgrid/Grid.jsx";
import Color from "../pixelgrid/Color.jsx";
import Symbol from './Symbol.jsx'
import gridicon from './icons/offset.png'
import stitchicon from './icons/stitch.png'
import widicon from './icons/width.png'
import heiicon from './icons/height.png'
import outlineicon from './icons/border.png'
import fillicon from './icons/fill.png'
import reseticon from './icons/1.png'
import expicon from './icons/export.png'
import saveicon from './icons/save.png'
import colicon from './icons/fill_col.png'
import plusicon from './icons/plus.png'
import minusicon from './icons/minus.png'


import settingsicon from './icons/settings.png'

import NavContainer from "../Header/NavContainer.jsx";
import SaveButton from './SaveButton.jsx'

import { HexColorPicker } from "react-colorful"
import { exportComponentAsPNG } from "react-component-export-image"
import { colors } from "@mui/material";


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

  const [name, setFName] = useState('untitled')

  var grid = <Grid></Grid>




  // console.log(colors);

  const panelRef = useRef()

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
    setZoom(0);
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

  function FillRow() {
    // var pixel = document.getElementsByClassName('pixel');
    // for (var i = 0; i < pixel.length; i++) {
    //   pixel[i].style.backgroundColor = selectedColor;
    // }
    setBg(selectedColor);
    setDrawMode(4);
  }
  function initColors() {
    let colors = [];
    for (let i = 0; i < 8; i++) {
      let id = i.toString() + 'c'
      // colors.push(<div onClick={() => { xuseColorX(id) }}> <Color selectedColor={selectedColor} id={id} mode={modeC} ></Color></div>)
      colors.push(<div onClick={() => { xuseColorX(id) }}> <Color id={id} mode={modeC} setColorC={setColor} selectedColor={selectedColor}></Color></div>)

    }
    return <div id="colorbox" >{colors}</div>;
  }

  function drawGrid() {
    grid = <Grid id='g' width={panelWidth} height={panelHeight} selectedColor={selectedColor} mode={mode} stitch={stitch} clicked={isClicked} drawMode={drawMode} bgFill={bgFill} zoom={zoom} bold={boldOutline}></Grid>
    return grid;
  }

  function xuseColorX(id) {
      let colorToUse = document.getElementById(id)
      let color = colorToUse.value;
      setColor(color);
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

  function showText(e) {
    console.log(e)
  }

   function storeFileName(fname){
    localStorage.setItem("filename", fname);
    console.log(localStorage.filename)
      }

  useEffect(() => {
    drawGrid();
  }, [bgFill, boldOutline, selectedColor])

  return (
    <div className="Container">
      <div className='page'>
        <div className='navContainer'>
          <div className='settings' id='settings' onMouseEnter={(e) => { showText('settings') }} style={{ display: 'none' }}>
            <div id="options">
              <div className='size' id='gridOP'>
                <div >
                  <div className="option">
                    <Symbol src={gridicon} id="gicon" text='grid layout' />
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
                    <Symbol src={stitchicon} id="sticon" text='stitch size' />
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
                    <Symbol src={widicon} id="wicon" text='width' />
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
                    <Symbol src={heiicon} id="hicon" text='height' />
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
                  <Symbol src={outlineicon} id="oicon" text='outline frequency' />
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
            <NavContainer />
            <button className='noBord' onClick={hideSettings}>
              <Symbol src={settingsicon} id="seticon" text='settings' style={{ height: '25px' }} />
              {/* <img src={} alt="Logo" id="sticon" onClick={hideSettings} class='icon' style={{ height: '25px' }} /> */}
            </button>

            <div className='inputC'>
              <input className='input' id='docname' type='text' value={localStorage.filename} onChange={(e)=>{setFName(e.target.value); storeFileName(e.target.value)}}></input>
            </div>
            <div className='saveOP' id='saveOP'>
              <SaveButton src={saveicon} text="save grid" fname={name} width={panelWidth} height={panelHeight} stSize={stitch} offset={mode} boldLines={boldOutline} />
              <button
                className="noBord"
                id='saveOPs'
                value='export'
                onClick={() => exportComponentAsPNG(panelRef, { fileName: name, html2CanvasOptions: { backgroundColor: null } })}>

                <Symbol src={expicon} id="sicon" text='export grid' style={{ height: '25px' }} />
              </button>
            </div>
          </div>
        </div>
        <div className='snaptobtm'>
          <div className="gridcontainer" onMouseDown={() => { setClick(true); }} onMouseUp={() => { setClick(false); }}  >
            <div className="grid" id='grid' ref={panelRef}>
              {drawGrid()}
            </div>
          </div>

          <div className="bottomnav">
            <div className='bottomnavbar'>
              <div className='zooms'>
                <span>Zoom:</span>
                <div className='exps'>
                  <button className='noBord' onClick={() => { setZoom(zoom + 1) }}> <Symbol src={plusicon} id="picon" text='zoom in' style={{ height: '25px' }} /></button>
                  <button className='noBord' onClick={() => { setZoom(zoom - 1) }}> <Symbol src={minusicon} id="micon" text='zoom out' style={{ width: '10px' }} /></button>
                </div>
              </div>
              <div className='colors'>
                  <div className="colorCont" style={{ backgroundColor: '#c1d8c3' }}>                      
               
                    <div className='colorButts'>
                       {initColors()}
                       {/* <input id='colorinp' type='color' value={selectedColor} onChange={e=>{showColor(e.target.value)}}></input> */}

                    </div>
                  </div>

                  <div className='colorButtsRight'>
                    <button
                      className="noBord"
                      value='reset'
                      onClick={Reset}>
                      <Symbol src={reseticon} id="ricon" text='clear grid' style={{ height: '25px' }} />
                    </button>
                    <button
                      className="noBord"
                      value='fill'
                      onClick={Fill}>
                      <Symbol src={fillicon} id="ficon" text='fill grid' style={{ height: '25px' }} />
                    </button>
                    <button
                      className="noBord"
                      value='fill'
                      onClick={FillRow}>
                      <Symbol src={colicon} id="fricon" text='fill column' h='10px' style={{ width: '15px' }} />
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
