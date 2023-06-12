import React, { useState } from "react"
import "./Pixel.css"

export default function Pixel(props) {
  const { selectedColor, stitch ,clicked, drawMode, zoom} = props

  const [pixelColor, setPixelColor] = useState("white")
  const [oldColor, setOldColor] = useState(pixelColor)
  const [canChangeColor, setCanChangeColor] = useState(true)
  const[ogW, setOGw] = useState(10);

  function applyColor() {
    setPixelColor(selectedColor)
    setCanChangeColor(false)
    }

  function changeColorOnHover() {
    if(clicked){
      applyColor()
    }
    else{
    setOldColor(pixelColor)
    setPixelColor(selectedColor)}
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
      color={pixelColor}
      style={{ backgroundColor: pixelColor,border: "1px solid black", height: stitch+zoom+"px", width: ogW+zoom+"px"}}
    ></div>
  )
}