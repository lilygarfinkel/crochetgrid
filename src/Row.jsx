import React from "react"
import "./Row.css"
import Pixel from "./Pixel.jsx"
import Pixelholder from "./Pixelholder.jsx"

export default function Row(props) {
  const {width, selectedColor, stitch, clicked, drawMode, bgFill, zoom, borderB, x, y } = props

  let borderR = false;
  let pixels = []

    for (let i = 0; i < width+1; i++) {
      //bold every 5 gridlines
      if((i) % 5 === 0){
        borderR = true;
      }
      else{
        borderR=false;
      }
      // horizontal numbers
      if(y){
        if(i===0){
          pixels.push(<Pixelholder key={i} zoom={zoom} x={''}></Pixelholder>)
        }
        else{
          pixels.push(<Pixelholder key={i} zoom={zoom} x={i}></Pixelholder>)

        }
      }
      else{
      // vertical numbers
      if(i===0){
        pixels.push(<Pixelholder key={i} zoom={zoom} x={x}></Pixelholder>)
      }
      else{
      pixels.push(<Pixel key={i} selectedColor={selectedColor} stitch={stitch} clicked={clicked} drawMode={drawMode} bgFill={bgFill} zoom={zoom} borderR={borderR} borderB={borderB}/>)
    }
  }
  }
  
  return <div className="row" key="row">{pixels}</div>
}
