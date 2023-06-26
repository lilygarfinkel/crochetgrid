import React, { useState, useRef, useEffect } from "react"
import logo from './logo.png'
import './App.css';
import './Container.css';
import Grid from "./Grid.jsx";
import Color from "./Color.jsx";
import SwatchesPicker from './SwatchesPicker.jsx'
import { HexColorPicker } from "react-colorful"
import { exportComponentAsPNG } from "react-component-export-image"
import { selectClasses } from "@mui/material";

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

  const [sClick, sClicked] = useState(false);
  const [eClick, eClicked] = useState(false);
  const presetColors = ["#ff0000", "#ffa500", "#ffff00", "#0d6416", "#008000", '#0000ff', '#4b0082', "#ee82ee"];

  const [modeC, setModeC] = useState('set');

  var grid = <Grid></Grid>

  const panelRef = useRef()

  function changeMode(e) {
    const m = e.target.value;
    setMode(m);
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

  function hideNav(e) {
    console.log(e.target.value)
    var x = e.target.value
    var options = document.getElementById("options");
    var save = document.getElementById("export");
    if (x === 'edit') {
      options.style.display = 'flex';
      save.style.display = 'none';
    }
    else if (x === 'file') {
      options.style.display = 'none';
      save.style.display = 'flex';
    }
  }


  function Reset() {
    setPanelHeight(15);
    setPanelWidth(15);
    setZoom(0);
    document.getElementById('sizew').value = '15';
    document.getElementById('sizeh').value = '15';
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

  function handleClick(e) {
    var m = e.target.value;
    setModeC(m);
    var sbutton = document.getElementById('set');
    var ubutton = document.getElementById('use');

    if (m === "set") {
      if (sClick) {
        //unhighlight button
        sbutton.style.backgroundColor = 'rgb(96, 62, 20)'
        sClicked(false);
        eClicked(false);
      }
      else {
        //highlight button
        
        document.getElementById('colorpicker').style.display = "flex"
        sbutton.style.backgroundColor = 'rgb(25, 25, 25)';
        ubutton.style.backgroundColor = 'rgb(0, 0, 0)'
        sClicked(true);
        eClicked(false);
      }
    }
    else if (m === "use") {
      if (eClick) {
        document.getElementById('colorpicker').style.display = "none"

        //unhighlight button
        ubutton.style.backgroundColor = 'rgb(0, 0, 0)'
        eClicked(false);
        sClicked(false);
      }
      else {
        //highlight button
        ubutton.style.backgroundColor = 'rgb(25, 25, 25)';
        sbutton.style.backgroundColor = 'rgb(0, 0, 0)';
        eClicked(true);
        sClicked(false);

      }
    }
  }

  function initColors(n, t) {
    // var rows = [];
    // var row = 0; 
    // for (let j = 0; j < 2; j++) {
      let colors = [];
      // row+=1;
      for (let i = 0; i < n; i++) {
        let id = i.toString() + t
        // if(row===2 ){
        // colors.push(<div onClick={() => (useColor(id))}><Color selectedColor={selectedColor} id={id} mode={modeC} ></Color></div>)
        // }
        // else{
          colors.push(<div onClick={() => (useColor(id))}> <Color selectedColor={selectedColor} id={id} mode={modeC} ></Color></div>)

      }
    // rows.push(<div div className = 'colors'  id={row}>{colors}</div>)
  // }
  // console.log(rows)
    return colors;
  }

  function drawGrid() {
    grid = <Grid id='g' width={panelWidth} height={panelHeight} selectedColor={selectedColor} mode={mode} stitch={stitch} clicked={isClicked} drawMode={drawMode} bgFill={bgFill} zoom={zoom}></Grid>
    return grid;
  }

  function useColor(id) {
    console.log(id);
    if (modeC === "use") {
      let colorToUse = document.getElementById(id)
      let color = colorToUse.style.backgroundColor;
      console.log(color)
      var colortohex = color.split("(")[1].split(")")[0];
      colortohex = colortohex.split(", ");
      var hex =colortohex.map(function(x){            
        x = parseInt(x).toString(16);      
        return (x.length==1) ? "0"+x : x;  
    })
    hex = "#"+hex.join("");  
      console.log(hex)
      setColor(hex);
      colorToUse.style.border = '2px solid green'
    }

  }
 
  function colorPicker() {
    let cp = <HexColorPicker id='colorpick' color={selectedColor} onChange={setColor} />
    return cp;
  }
  useEffect(() => {
    drawGrid();
  }, [bgFill])

  return (
    <div className="Container">
      <div className="header">
        <img className='head' src={logo} alt="Logo" id="logo" style={{ height: '20px' }} />
        <h1 className="head">crochetgrid</h1>
        <div className='headButtons'>
          <ul>
            <li><button value='file' id='hidenav' onClick={(e) => { hideNav(e) }}>File</button></li>
            <li><button value='edit' id='hidenav' onClick={(e) => { hideNav(e) }}>Edit</button></li>
            {/* <div  id='hidebox'className='hidebox'>collapse nav</div> */}
            {/* <li><button value='save' id='hidenav' onClick={(e) => { hideNav(e) }}>Save</button></li> */}
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
                  // setColor('white');
                  setPanelWidth(e.target.value);
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
                  // setColor('white');
                  console.log(e.target.value)
                  setPanelHeight(e.target.value);
                }}
              />
            </div>
            -----------------------------
            <div className="small" id='colorpicker'style={{display:'none'}}>
              {colorPicker()}
            </div>
            <div className='colors'>
              <div className="preset">
              <SwatchesPicker
        color={selectedColor}
        onChange={setColor}
        presetColors={presetColors}
      />
            </div>
              <div className="colorCont">
              {initColors(8,'custom')}
              </div>
              <button
                className='export'
                id='set'
                value='set'
                clicked={sClick}
                onClick={(e) => { handleClick(e) }}
                style={{ backgroundColor: 'rgb(25, 25, 25)' }}>
                set color</button>
              <button
                className='export'
                id='use'
                value='use'
                clicked={eClick}
                onClick={(e) => { handleClick(e) }}>
                use color</button><br></br>
              -----------------------------

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
              value='upload'
            // onClick={}
            >
              Upload Image</button>
            <button
              className="export"
              value='export'
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
