import React from "react"
import "./Row.css"
import Pixel from "./Pixel.jsx"

export default function Row(props) {
  const {width, selectedColor, stitch } = props

  let pixels = []

    for (let i = 0; i < width; i++) {
      pixels.push(<Pixel key={i} selectedColor={selectedColor} stitch={stitch}  />)
    }
  
  return <div className="row">{pixels}</div>
}
