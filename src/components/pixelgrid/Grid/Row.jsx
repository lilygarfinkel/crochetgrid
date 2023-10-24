import React from "react"
import "./Row.css"
import Pixel from "./Pixel.jsx"
import Pixelholder from "./Pixelholder.jsx"

export default function Row(props) {
  const {width, selectedColor, stitch, clicked, drawMode, bgFill, zoom, borderB, x, y, bold, count } = props

  let borderR = false;
  let pixels = []

  let xid = x.toString();
  var yid = 0;

    for (let i = -1; i < width; i++) {
      //bold every 5 gridlines
      if((i+1) % bold === 0){
        borderR = true;
      }
      else{
        borderR=false;
      }
      // horizontal numbers
      if(y){
        if(i===-1){
          pixels.push(<Pixelholder className={ 'pixel' + xid} width ={width} zoom={zoom} x={''} y={''} bold={bold}></Pixelholder>)
        }
        else{
          pixels.push(<Pixelholder className={ 'pixel' + xid} width ={width} zoom={zoom} x={i+1} y={count} bold={bold}></Pixelholder>)

        }
      }
      else{
      // vertical numbers
      if(i===-1){
        pixels.push(<Pixelholder className={ 'pixel' + xid} width ={width} zoom={zoom} x={x} count={count} bold={bold}></Pixelholder>)
      }
      else{
      pixels.push(<Pixel className={count} width ={width}  selectedColor={selectedColor} count={yid} stitch={stitch} clicked={clicked} drawMode={drawMode} bgFill={bgFill} zoom={zoom} borderR={borderR} borderB={borderB} x={xid} y={y} bold={bold}/>)
    }
  }
  yid+=1;
  }
  
  return <div className="row" key="row" id={'row' + (count+1)}>{pixels}</div>
}
