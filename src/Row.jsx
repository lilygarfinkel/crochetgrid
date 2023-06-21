import React from "react"
import "./Row.css"
import Pixel from "./Pixel.jsx"

export default function Row(props) {
  const {width, selectedColor, stitch, clicked, drawMode, bgFill, zoom, borderB } = props

  let borderR = false;
  let pixels = []

    for (let i = 0; i < width; i++) {
      if((i+1) % 5 == 0){
        borderR = true;
      }
      else{
        borderR=false;
      }
      pixels.push(<Pixel key={i} selectedColor={selectedColor} stitch={stitch} clicked={clicked} drawMode={drawMode} bgFill={bgFill} zoom={zoom} borderR={borderR} borderB={borderB}/>)
    }
  
  return <div className="row" key="row">{pixels}</div>
}
