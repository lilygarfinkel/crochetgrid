import React, { useState, useRef, useEffect, useContext } from "react"
import './PatContainer.css';

import Pattern from './Pattern.jsx'
import { HexColorPicker } from "react-colorful"


function Container() {
  const [panelWidth, setPanelWidth] = useState(15);
  const [panelHeight, setPanelHeight] = useState(15);
  const [selectedColor, setColor] = useState("#ff0000");
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
  useEffect(() => {
    drawGrid2();
  }, [])

  return (
    <div className="Container">
      <div className='page'>
            <div className="grid" id='grid' ref={panelRef}>
              {drawGrid2()}
            </div>
          </div>
        </div>

  );
}

export default Container;
