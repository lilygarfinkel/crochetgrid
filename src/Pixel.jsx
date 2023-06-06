import React, { useState } from "react"
import "./Pixel.css"

export default function Pixel(props) {
  const { selectedColor, stitch ,clicked} = props

  const [pixelColor, setPixelColor] = useState("#fff")
  const [oldColor, setOldColor] = useState(pixelColor)
  const [canChangeColor, setCanChangeColor] = useState(true)
  const [isClicked, setClick] = useState(false)


  function applyColor() {
    setPixelColor(selectedColor)
    setCanChangeColor(false)
  }

  function changeColorOnHover() {
    console.log(clicked)
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
      style={{ backgroundColor: pixelColor ,border: "1px solid black", height: stitch+"px" }}
    ></div>
  )
}