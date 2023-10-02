import React, { useState, useRef, useEffect, useContext } from "react"
import './PatContainer.css';

import Pattern from './Pattern.jsx'
import { exportComponentAsPNG } from "react-component-export-image"
import Symbol from '../pixelgrid/Symbol.jsx'
import saveicon from '../pixelgrid/icons/8.png'
import NavContainer from "../Header/NavContainer.jsx";



function Container() {
  const [panelWidth, setPanelWidth] = useState(15);
  const [panelHeight, setPanelHeight] = useState(15);
  const [fname, setFName] = useState('untitled')

  const panelRef = useRef()



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

  function pull_name(name){
    console.log(name);
    setFName(name);
  }
  useEffect(() => {
    drawGrid2();
  }, [])

  return (
    <div className="Container">
      <div className='page'>
        <div className='navContainer'>
          <NavContainer func={pull_name}/>
          <button
            className="noBord"
            id='saveicon'
            value='export'
            onClick={() => exportComponentAsPNG(panelRef, { fileName: fname, html2CanvasOptions: { backgroundColor: null } })}>

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

export default Container;
