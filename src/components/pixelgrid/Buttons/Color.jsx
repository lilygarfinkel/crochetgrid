import React, { useState,useEffect } from "react"
import "./Color.css"

export default function Color(props) {

const {id, mode, setColorC, selectedColor} = props;

const [currColor, setColor] = useState('#ffffff');
const [bord, setBord] = useState('1px solid black');
const [m, setMode] = useState(mode);
const [modeC, setModeC] = useState('set');
const [colorNum, setColorNum] = useState(10)

useEffect(() => {
  setMode(mode);
  setColorC(currColor)
  // setBord('1px solid black')
}, [mode, currColor, bord])

  function handleClick(id){
    var color = document.getElementById(id);
    var backColor = color.style.backgroundColor;
    backColor = parseColor(backColor);
    setColor(backColor);
    // console.log(backColor)

    }
  
    function parseColor(color) {
      var arr=[]; color.replace(/[\d+\.]+/g, function(v) { arr.push(parseFloat(v)); });
      return  "#" + arr.slice(0, 3).map(toHex).join("")
  }
  function toHex(int) {
      var hex = int.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
  }
return (
<div className="colorBtns"> 
 
    <div className='colorinp' 
          id={id}
          onClick={()=>{handleClick(id)}}>
     </div> 
  </div>
)
}