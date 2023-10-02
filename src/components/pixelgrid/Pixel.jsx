import React, { useState,useEffect } from "react"
import "./Pixel.css"

export default function Pixel(props) {
  const { selectedColor, width, stitch, clicked, drawMode, bgFill, zoom, borderR, borderB, bold, x, y, count } = props

  const [pixelColor, setPixelColor] = useState('#ffffff')
  const [oldColor, setOldColor] = useState(pixelColor)
  const [canChangeColor, setCanChangeColor] = useState(true)
  const [dm, setDM] = useState(drawMode)
  const [bg, setbgFill] = useState(bgFill)
  const [bordR, setBordR] = useState( "1px solid black")
  const [bordB, setBordB] = useState( "1px solid black")

useEffect(() => {
  setDM(drawMode);
  setbgFill(bgFill)

  if(borderR){
    setBordR('2px solid black')
  }
  else{
    setBordR('1px solid black')
  }
  if(borderB){
    setBordB('2px solid black')
  }
  else{
    setBordB('1px solid black')

  }
}, [bgFill, bordB, bordR, bold])

 function applyColor() {
    setPixelColor(selectedColor)
    setCanChangeColor(false)
    if(dm === 2){
      setDM(0)
    } 
  //  if( dm == 3){
  //     // let xid = x.toString();
  //     let pid ='pixel' + x.toString();
  //     let rid = 'row' + count;
  //     console.log(pid)
  //     console.log(rid)
  //     var pix = document.getElementsByClassName(count.toString());
  //     // .getElementsByClassName(rid);
  //     // var pix = document.getElementsByClassName(rid);
  //     console.log(pix)
  //     // console.log(p)
  //     for (var i = 1; i < pix.length; i++) {
  //       pix[i].style.backgroundColor = selectedColor;
  //       }
      
  //     setDM(0)
  //  }
   }

  function changeColorOnHover() {
    // console.log(dm)
    if (clicked) {
      applyColor()
    }
    else {
      //default
    if(dm === 0){
      setOldColor(pixelColor)
      setPixelColor(selectedColor)
    }
    //background filled
    else if(dm === 2){
      setOldColor(bg)
      setPixelColor(selectedColor)
    }
    else if(dm === 3){
      setOldColor(bg)
      setPixelColor(selectedColor)
    }
   }
  
  }
    


function resetColor() {
  if (canChangeColor) {
    setPixelColor(oldColor)
  }
  setCanChangeColor(true)
}


return (
  <div
    className="pixel"
    onClick={applyColor}
    onMouseEnter={changeColorOnHover}
    onMouseLeave={resetColor}
    style={{ backgroundColor: pixelColor, border:'1px solid grey', borderRight: bordR, borderBottom: bordB, height: stitch + zoom + "px", width: 15 + zoom + "px" }}
  ></div>
)
}