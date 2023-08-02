import React, { useState, useRef, useEffect } from "react"
// import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './cgwiwmt.png'
import './App.css';
import './Container.css';
import Grid from "./Grid.jsx";
import Color from "./Color.jsx";
import SwatchesPicker from './SwatchesPicker.jsx'
import UploadImg from './UploadImg.jsx'
import Pattern from './Pattern.jsx'
import { HexColorPicker } from "react-colorful"
import { exportComponentAsPNG } from "react-component-export-image"
// import { TiEdit, TiDocumentText, TiDownloadOutline } from "react-icons/ti";


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

  const [hidden, setHidden] = useState('hidden');


  var grid = <Grid></Grid>

  const panelRef = useRef()
  const panelRefp = useRef()

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
            //highlight button
        document.getElementById('colorpicker').style.display = "flex"
        ubutton.style.backgroundColor = '#ECFEBE';
        sbutton.style.backgroundColor = '#D0EB50'
        sClicked(true);
        eClicked(false);
      
    }
    else if (m === "use") {
              //highlight button
        sbutton.style.backgroundColor = '#ECFEBE';
        ubutton.style.backgroundColor = '#D0EB50';
        eClicked(true);
        sClicked(false);

  }
}

  function toggleSideNav(e) {
    var ebutton = document.getElementById('navedit');
    var pbutton = document.getElementById('navpattern');
    // var sbutton = document.getElementById('navsave');
    var ops = document.getElementById('options');
    var sops = document.getElementById('saveO');
    var pat = document.getElementsByClassName('pattern');
    if (e === ebutton.value){
      ebutton.style.backgroundColor =  '#D0EB50';
      pbutton.style.backgroundColor =  '#BACF1D';
      // sbutton.style.backgroundColor =  '#BACF1D';
      ops.style.display = 'flex';
      sops.style.display = 'none';
      for(var i = 0; i <pat.length; i ++){
        pat[i].style.display = 'none';
      }
     
      document.getElementById('grid').style.display = 'flex'
    }
    // if (e === sbutton.value){
    //   // sbutton.style.backgroundColor =  '#D0EB50';
    //   ebutton.style.backgroundColor =  '#BACF1D';
    //   pbutton.style.backgroundColor =  '#BACF1D';
    //   sops.style.display = 'flex';
    //   ops.style.display = 'none';
    //   for(var i = 0; i <pat.length; i ++){
    //     pat[i].style.display = 'none';
    //   }      document.getElementById('grid').style.display = 'flex'

    // }
    if (e === pbutton.value){
      pbutton.style.backgroundColor =  '#D0EB50';
      // sbutton.style.backgroundColor =  '#BACF1D';
      ebutton.style.backgroundColor =  '#BACF1D';
      ops.style.display = 'none';
      sops.style.display = 'none';
      for(var i = 0; i <pat.length; i ++){
        pat[i].style.display = 'flex';
      }    
        document.getElementById('grid').style.display = 'none'

    }
  }

  function initColors() {
    let colors = [];
    for (let i = 0; i < 8; i++) {
      let id = i.toString() + 'c'
      colors.push(<div onClick={() => {xuseColorX(id)}}> <Color selectedColor={selectedColor} id={id} mode={modeC} ></Color></div>)
    }
    return colors;
  }

  function drawGrid() {
    grid = <Grid id='g' width={panelWidth} height={panelHeight} selectedColor={selectedColor} mode={mode} stitch={stitch} clicked={isClicked} drawMode={drawMode} bgFill={bgFill} zoom={zoom}></Grid>
    return grid;
  }

  function drawGrid2() {
    var colors = []
    var pix = document.getElementsByClassName('pixel');
    var len = pix.length
    for(var i = 0; i < len -1; i++){
      var p=pix[i];
      colors.push( p.style.backgroundColor);
        }
    console.log(colors);
  
      return <Pattern colors={colors} height={panelHeight} width={panelWidth}></Pattern>
   

  }

  

  function uploadImg(){
      setHidden('visible');
   
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

  function hideSection(e){
    var section=document.getElementById(e);
    var button = document.getElementById(e + 'b')
    if(section.style.display === 'none'){
      section.style.display = 'inline-flex';
      button.innerHTML = '^'
    }
    else{
      section.style.display = 'none';
      button.innerHTML = 'v'
    }
  }

  function colorPicker() {
    let cp = <HexColorPicker id='colorpick' color={selectedColor} onChange={setColor} />
    return cp;
  }
  useEffect(() => {
    drawGrid();
    drawGrid2();
  }, [bgFill, hidden])

  return (
    <div className="Container">
      <div className="header">
          <img className='head' src={logo} alt="Logo" id="logo" style={{ height: '60px' }} />
      
        <div className='headButtons'>
          <a>login</a>|
          <a>sign up</a>
        </div>
      </div>
      <div className='page'>
      <div className='popUpCont' id="pop">
        <UploadImg hidden={hidden}></UploadImg>
      </div>
      <div className='navContainer'>
      <div className='sidenav'>
        <button className='navButts' id='navedit' value = 'navedit' onClick = {(e) => {toggleSideNav(e.target.value)}}> edit</button>   
        <button className='navButts' id='navpattern'  value = 'navpattern' onClick = {(e) => {toggleSideNav(e.target.value)}}> pattern</button>   
        {/* <button className='navButts' id='navsave'  value = 'navsave' onClick = {(e) => {toggleSideNav(e.target.value)}}> save</button>    */}

      </div>
        <div><button>x</button></div>
        <div id="navbar" className="navbar">
          <div id="options">
            <div className='lbl'>
              <p>Grid</p>
              <button className='showOP' id='gridOPb' value='gridOP'onClick={(e) => {hideSection(e.target.value)}}>^</button>
              </div>
            <div className='size' id='gridOP'>
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
              <div className='exps'>
                <span>Zoom:</span>
                <button className='zoom' onClick={() => { setZoom(zoom - 1) }}>-</button>
              <button className='zoom' onClick={() => { setZoom(zoom + 1) }}>+</button>
            </div>
            </div>
            <div className='lbl'>
              <p>Colors</p>
              <button className='showOP' value='colorOP' id='colorOPb'onClick={(e) => {hideSection(e.target.value)}}>^</button>
              </div>
            <div className='colors' id='colorOP'> 
              <div className='colorpick'>
                <div className="small" id='colorpicker' style={{ display: 'flex' }}>
                  {colorPicker()}
                </div>
                <div className="preset">
                  <SwatchesPicker
                    color={selectedColor}
                    onChange={setColor}
                    presetColors={presetColors}
                  />
                </div>
                <div className="colorCont">
                  {initColors()}
                </div>
                <button
                  className='export'
                  id='set'
                  value='set'
                  clicked={sClick}
                  onClick={(e) => { handleClick(e) }}
                  style={{ backgroundColor: '#D0EB50' }}>
                  set color</button>
                <button
                  className='export'
                  id='use'
                  value='use'
                  clicked={eClick}
                  onClick={(e) => { handleClick(e) }}>
                  use color</button><br></br>
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
              <div className='lbl'>
              <p>Save</p>
              <button className='showOP' value='saveOP' id='saveOPb'onClick={(e) => {hideSection(e.target.value)}}>^</button>
              </div>
          <div className='saveOP' id='saveOP'>
             <button
              className="export"
              id='saveOPs'
              value='export'
              onClick={() => exportComponentAsPNG(panelRef, { html2CanvasOptions: { backgroundColor: null } })}>
              Export</button>
              <button
              className="export"
              id='saveOPs2'
              value='upload'
              onClick={uploadImg}
            > Upload Image</button>
          </div>
            </div>
          </div>
          <div className='saveO' id='saveO'>
          
        </div>
        <div className='pattern'>
        <button
              className="export"
              id='savePat'
              value='export'
              onClick={() => exportComponentAsPNG(panelRefp, { html2CanvasOptions: { backgroundColor: null } })}>
              Export</button>
      
        </div>
        </div>
        </div>
     
        <div className="gridcontainer" onMouseDown={() => { setClick(true); }} onMouseUp={() => { setClick(false); }}  >
        <div className='pattern' id='pattern' ref={panelRefp}>
          {drawGrid2()}
         </div>
          <div className="grid" id='grid' ref={panelRef}>
            {drawGrid()}
          </div>
        </div>
      </div>
    </div>

  );
}

export default Container;
