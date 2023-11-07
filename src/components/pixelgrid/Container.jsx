import React, { useState, useRef, useEffect } from "react"
import './Container.css';
import Grid from "./Grid/Grid.jsx";
import Color from "./Buttons/Color.jsx";
import Symbol from './Buttons/Symbol.jsx'
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
import seventeen from './icons/17 stitches.png'

import settingsicon from './icons/settings.png'
import SwatchCalc from './SwatchCalc.jsx'

import SaveButton from './Buttons/SaveButton.jsx'
import ColorReplacer from "./Buttons/ColorReplacer.jsx"
import { HexColorPicker, HexColorInput } from "react-colorful";
import { exportComponentAsPNG } from "react-component-export-image"


function Container() {



  const [panelWidth, setPanelWidth] = useState(15);
  const [panelHeight, setPanelHeight] = useState(15);
  const [selectedColor, setColor] = useState("#ffffff");
  const [stitch, setStitch] = useState(15);
  const [mode, setMode] = useState("grid");
  const [isClicked, setClick] = useState(false);
  const [bgFill, setBg] = useState(selectedColor);
  //0=default, 2=fill/reset
  const [drawMode, setDrawMode] = useState(0);
  const [zoom, setZoom] = useState(0);
  const [boldOutline, setBoldOutline] = useState(5);
  const [modeC, setModeC] = useState('set');
  const [colorNum, setColorNum] = useState(7)
  const [savedColor, setSavedColor] = useState(0);

  const [name, setFName] = useState('untitled')

  var grid = <Grid></Grid>

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

  function initColors() {
    let colors = [];
    for (let i = 0; i < colorNum; i++) {
      let id = i.toString() + 'c'
      // colors.push(<div onClick={() => { xuseColorX(id) }}> <Color selectedColor={selectedColor} id={id} mode={modeC} ></Color></div>)
      colors.push(<div className='colorinphold' onClick={() => { xuseColorX(id) }}> <Color id={id} mode={modeC} setColorC={setColor} selectedColor={selectedColor}></Color></div>)
    }
    return <div id="colorbox" >{colors}</div>;
  }

  function xuseColorX(id) {
    let colorToUse = document.getElementById(id)
    let color = colorToUse.style.backgroundColor;
    console.log(selectedColor);
    setColor(color);
    console.log(selectedColor);
  }

  function saveColor(sColor) {
    var id = savedColor.toString() + 'c';
    var saving = document.getElementById(id);
    saving.style.backgroundColor = sColor;
    var num = savedColor + 1
    console.log(savedColor, colorNum, num)
    if (num === colorNum) {
      setSavedColor(0)
    }
    else {
      setSavedColor(num)

    }


  }

  function showColorPick() {
    var disp = document.getElementById('colorpicker').style.display;
    if (disp === 'none') {
      document.getElementById('colorpicker').style.display = 'flex'
    }
    else if (disp === 'flex') {
      document.getElementById('colorpicker').style.display = 'none'
    }

  }

  function drawGrid() {
    grid = <Grid id='g' width={panelWidth} height={panelHeight} selectedColor={selectedColor} mode={mode} stitch={stitch} clicked={isClicked} drawMode={drawMode} bgFill={bgFill} zoom={zoom} bold={boldOutline}></Grid>
    return grid;
  }



  function hideNavbar(id) {
    let s = document.getElementById('settings');
    if (s.style.display === 'none') {
      s.style.display = 'flex';

    }
    else {
      s.style.display = 'none';
    }
  }

  function collapseSettings(id) {
    var thisO = document.getElementById(id + 'Options');
    var thisB = document.getElementById('collapse' + id + 'Ops');
    var thisT = document.getElementById(id + 'SettingsTitle');

    console.log(thisO)
    var display = thisO.style.display;
    var valb = thisB.value;

    if (display === 'none') {
      thisO.style.display = 'flex';
      thisT.style.boxShadow = '0 2px #e8e5e2';
    }
    else {
      thisO.style.display = 'none';
      thisT.style.boxShadow = 'none';


    }

    if (valb === '🞃') {
      thisB.value = '🞂';
      thisB.innerHTML = '🞂';
    }
    else {
      thisB.value = '🞃';
      thisB.innerHTML = '🞃';
    }
  }

  function storeFileName(fname) {
    localStorage.setItem("filename", fname);
    console.log(localStorage.filename)
  }

  function PixelFill() {
    setDrawMode(0);
  }

  function Fill() {
    var pixel = document.getElementsByClassName('pixel');
    for (var i = 0; i < pixel.length; i++) {
      pixel[i].style.backgroundColor = selectedColor;
    }
    setBg(selectedColor);
    setDrawMode(2);

  }

  function FillCol() {
    setDrawMode(3);
  }

  function FillRow() {
    setDrawMode(4);
  }

  function toggleSwatch() {
    console.log('clicked')
    var box = document.getElementById('swatchSet');

    if (box.style.display === 'flex') {
      box.style.display = 'none';
    }
    else if (box.style.display === 'none') {
      box.style.display = 'flex';
    }
  }



  useEffect(() => {
    drawGrid();
  }, [bgFill, boldOutline, selectedColor])

  return (
    <div className="Container">
      <div className='page'>

        <div className='navContainer'>

         <SwatchCalc></SwatchCalc>

          <div className='sideSettings'>
            <button
              className='noBord'
              onClick={() => { hideNavbar('settings') }}>
              <img src={settingsicon} id="seticon" text='settings' className='togglenav' />
            </button>
          </div>


          <div className='settings' id='settings' style={{ display: 'none' }}>
            <div id='gridSettingsTitle' className='settingsTitle'>
              <p className='settingsTit'>Grid Layout</p>
              <button id="collapsegridOps" className='collapseOps' value='🞃' onClick={() => { collapseSettings('grid') }}>🞃</button>
            </div>
            <div id="gridOptions" className='options' display='flex'>
              <div className='size' id='gridOP'>
                <div >
                  <div >
                    Format:
                    <div className="option">
                      {/* <Symbol src={gridicon} id="gicon" text='grid layout' /> */}
                      <select
                        className="panelInput"
                        defaultValue='grid'
                        onChange={e => {
                          changeMode(e)
                        }}>
                        <option name="grid"> grid</option>
                        <option name="offset">offset</option>
                      </select>
                    </div><br></br>
                    Pixel Height:
                    <div className="option">
                      {/* <Symbol src={stitchicon} id="sticon" text='stitch size' /> */}
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

                
                Outline Frequency:
                <div className="option">
                  {/* <Symbol src={outlineicon} id="oicon" text='outline frequency' /> */}
                  <input
                    type="number"
                    id='outlineSize'
                    className="panelInput"
                    defaultValue={boldOutline}
                    onChange={e => {
                      changeOutline(e);
                    }}
                  />
                </div><br></br>

                Size:
                <div className="option">
                  {/* <Symbol src={widicon} id="wicon" text='width' /> */}
                  <input
                    type="number"
                    id='sizew'
                    className="panelInput"
                    defaultValue={panelWidth}
                    onChange={e => {
                      setPanelWidth(e.target.value);
                    }}
                  />
                </div>x
                <div className="option">
                  {/* <Symbol src={heiicon} id="hicon" text='height' /> */}
                  <input
                    type="number"
                    id='sizeh'
                    className="panelInput"
                    defaultValue={panelHeight}
                    onChange={e => {
                      setPanelHeight(e.target.value);
                    }}
                  />
                </div>
                <br></br>
                <div className="option">
                  <button
                    id='swatchtog'
                    className="panelInput"
                    onClick={toggleSwatch}
                    style={{ marginBottom: '10px', height: 'auto' }}>
                    size from swatch</button>
                </div>
                </div>
              </div>
            </div>

            <div id='colorSettingsTitle' className='settingsTitle'>
              <button id="collapsecolorOps" className='collapseOps' value='🞃' onClick={() => { collapseSettings('color') }}>🞃</button>

              <p className='settingsTit'>Color Options</p>
            </div>
            <div id='colorOptions' className='options' display='flex'>
              <div id="colorselectlabel">
                <div
                  id='colorinput'
                  className='colorinps'
                  onClick={showColorPick}
                  style={{ backgroundColor: selectedColor }}>
                </div>
                <p style={{ paddingLeft: '2px', fontSize: '10px' }}>select color</p> </div>
              <div className="small" id='colorpicker' style={{ display: 'none' }} >
                <HexColorPicker id='colorpick' color={selectedColor} onChange={setColor} />
                <HexColorInput id='hexpick' color={selectedColor} onChange={setColor} prefixed />
                <button
                  id="addcolor"
                  onClick={() => { saveColor(selectedColor) }}>+</button>
              </div>

              <ColorReplacer id='replacecolor' d='none' setColorC={setColor}></ColorReplacer>

            </div>
            <div id='fillSettingsTitle' className='settingsTitle'>
              <p className='settingsTit'>Fill Options</p>
              <button id="collapsefillOps" className='collapseOps' value='🞃' onClick={() => { collapseSettings('fill') }}>🞃</button>
            </div>
            <div id='fillOptions' className="options" >
              <button
                className="noBord"
                value='reset'
                onClick={Reset}>
                <Symbol src={reseticon} id="ricon" text='clear grid' style={{ height: '25px' }} />
              </button>
              <button
                className="fillButt"
                value='fill'
                onClick={PixelFill}
                id='pbutt'>
                Pixel
              </button>
              <button
                className="fillButt"
                value='fill'
                onClick={Fill}
                id='fbutt'>
                Entire grid
              </button>
              <button
                className="fillButt"
                value='fill'
                onClick={FillCol}
                id='cbutt'>
                Column
              </button>
              <button
                className="fillButt"
                value='fill'
                onClick={FillRow}
                id='rbutt'>
                Row
              </button>
            </div>



          </div>



          <div id="navbar" className="navbar">

            <div className='inputC'>
              <input className='input' id='docname' type='text' value={localStorage.filename} onChange={(e) => { setFName(e.target.value); storeFileName(e.target.value) }}></input>
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
                  <button className='noBord' onClick={() => { setZoom(zoom - 1) }}>-</button>
                  <button className='noBord' onClick={() => { setZoom(zoom + 1) }}>+</button>
                </div>
              </div>

              <div className='colors'>

                <div className="colorCont" style={{ backgroundColor: '#c1d8c3' }}>
                  <div className='colorButts'>
                    {initColors()}
                  </div>
                  <div id="colorBtns">
                    <button className='colorBtn' onClick={() => { setColorNum(colorNum - 1) }}>-</button>
                    <button className='colorBtn' onClick={() => { setColorNum(colorNum + 1) }}>+</button>
                  </div>
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
