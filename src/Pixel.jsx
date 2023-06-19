import React, { useState,useEffect } from "react"
import "./Pixel.css"

export default function Pixel(props) {
  const { selectedColor, stitch, clicked, drawMode, bgFill, zoom } = props

  const [pixelColor, setPixelColor] = useState(selectedColor)
  const [oldColor, setOldColor] = useState(pixelColor)
  const [canChangeColor, setCanChangeColor] = useState(true)
  const [dm, setDM] = useState(drawMode)
  const [bg, setbgFill] = useState(bgFill)


useEffect(() => {
  setDM(drawMode);
  setbgFill(bgFill)
}, [bgFill])

 function applyColor() {
    setPixelColor(selectedColor)
    setCanChangeColor(false)
    if(dm === 2){
      setDM(0)
    }
   
   }

  function changeColorOnHover() {
    console.log(dm)
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
    style={{ backgroundColor: pixelColor, border: "1px solid black", height: stitch + zoom + "px", width: 10 + zoom + "px" }}
  ></div>
)
}