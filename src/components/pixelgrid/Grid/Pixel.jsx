import React, { useState, useEffect } from "react"
import "./Pixel.css"

export default function Pixel(props) {
  const { selectedColor, stitch, clicked, drawMode, bgFill, zoom, borderR, borderB, bold, x, y, count } = props

  var id = x.toString() + 'x' + count.toString();

  const [pixelColor, setPixelColor] = useState('#ffffff')
  const [oldColor, setOldColor] = useState(pixelColor)
  const [canChangeColor, setCanChangeColor] = useState(true)
  const [dm, setDM] = useState(drawMode)
  const [bg, setbgFill] = useState(bgFill)
  const [bordR, setBordR] = useState("1px solid black")
  const [bordB, setBordB] = useState("1px solid black")


  useEffect(() => {
    setDM(drawMode);
    setbgFill(bgFill);
    setBorder();
  }, [bgFill, bordB, bordR, bold, drawMode])


  function fillSearch(){
    var left = (x-1).toString() + 'x' + count.toString();
    var right = (x+1).toString() + 'x' + count.toString();
    var up = (x).toString() + 'x' + (count+1).toString();
    var down = (x).toString() + 'x' + (count-1).toString();

    var l = document.getElementById(left);
    var r = document.getElementById(right);
    var u = document.getElementById(up);
    var d = document.getElementById(down);
  }

  function applyColor() {
    setPixelColor(selectedColor)
    setCanChangeColor(false)
    if(dm === 1){
      fillSearch();
    }
    else if (dm === 2) {
      setDM(0)
    }
    else if (dm === 3) {
      var pix = document.getElementsByClassName('pixel');
      for (var i = 1; i < pix.length; i++) {
        var yid = pix[i].id.split("x")[1];
        console.log(yid[0], count)
        if (yid.toString() === count.toString()) {
          pix[i].style.backgroundColor = selectedColor;
        }
      }
     }
    else if (dm === 4) {
      var pix = document.getElementsByClassName('pixel');
      for (var i = 1; i < pix.length; i++) {
        var xid = pix[i].id.split("x")[0];
       console.log(xid, x)
        if (xid.toString() === x.toString()) {
          pix[i].style.backgroundColor = selectedColor;
        }
      }
    }
  }


 function setBorder(){
    if (borderR) {
      setBordR('2px solid black')
    }
    else {
      setBordR('1px solid black')
    }
    if (borderB) {
      setBordB('2px solid black')
    }
    else {
      setBordB('1px solid black')

    }
  }

  function changeColorOnHover() {
    // console.log(dm)
    if (clicked) {
      applyColor()
    }
    else {
      //default
      if (dm === 0) {
        setOldColor(pixelColor)
        setPixelColor(selectedColor)
      }
      //background filled
      else if (dm === 2 || dm === 3) {
        setOldColor(bg)
        setPixelColor(selectedColor)
      }
      // else if(dm === 3){
      //   setOldColor(bg)
      //   setPixelColor(selectedColor)
      // }
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
      id={id}
      className="pixel"
      onClick={applyColor}
      // onMouseEnter={changeColorOnHover}
      // onMouseLeave={resetColor}
      style={{ backgroundColor: pixelColor, border: '1px solid grey', borderRight: bordR, borderBottom: bordB, height: stitch + zoom + "px", width: 15 + zoom + "px" }}
    ></div>
  )
}