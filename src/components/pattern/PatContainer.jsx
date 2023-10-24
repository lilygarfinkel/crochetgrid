import React, { useState, useRef, useEffect, useContext } from "react"
import './PatContainer.css';

import Pattern from './Pattern.jsx'
import { exportComponentAsPNG } from "react-component-export-image"
import Symbol from '../pixelgrid/Buttons/Symbol.jsx'
import saveicon from '../pixelgrid/icons/8.png'
import { local } from "d3";


function PatContainer() {
  const [panelWidth, setPanelWidth] = useState(15);
  const [panelHeight, setPanelHeight] = useState(15);

  const panelRef = useRef()
  const [name, setFName] = useState(localStorage.fileName);

  function storeFileName(fname){
    localStorage.setItem("filename", fname);
    console.log(localStorage.filename)
      }

  function drawGrid2() {
    var colors = []
    var pix = document.getElementsByClassName('pixel');
    var len = pix.length
    for (var i = 0; i < len - 1; i++) {
      var p = pix[i];
      colors.push(p.style.backgroundColor);
    }
    // console.log(colors);

    return <Pattern colors={colors} height={panelHeight} width={panelWidth}></Pattern>
  }


  useEffect(() => {
    drawGrid2();
  }, [])

  return (
    <div className="Container">
      <div className='page'>
        <div className='navContainer '>
          <div className='inputC'>
              <input className='input' id='docname' type='text' value={localStorage.filename + "_pattern"} onChange={(e)=>{setFName(e.target.value); storeFileName(e.target.value)}}></input>
            </div>
          <button
            className="noBord"
            id='saveicon'
            value='export'
            onClick={() => exportComponentAsPNG(panelRef, { fileName: localStorage.filename, html2CanvasOptions: { backgroundColor: null } })}>

            <Symbol src={saveicon} id="sicon" text='export grid' style={{ height: '25px' }} />
          </button>
        </div>
        <div className="grid" id='grid' ref={panelRef}>
          {drawGrid2()}
        </div>
      </div>
    </div>

  );
}

export default PatContainer;
