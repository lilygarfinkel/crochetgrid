import React, { useState,useEffect } from "react"
import "./Color.css"

export default function Color(props) {

const {selectedColor, id, mode} = props;

const [currColor, setColor] = useState("#ffffff");
const [newColor, setNewColor] = useState(currColor);


const [bord, setBord] = useState('1px solid black');
const [m, setMode] = useState(mode);


useEffect(() => {
  setMode(mode);
  setBord('1px solid black')
}, [mode, currColor])


  function handleClick(){
    var c = document.getElementsByClassName('Color');
      if(m === 'set'){
      setColor(selectedColor);
      for (var i = 0; i < c.length; i++) {
        c[i].style.border = '1px solid black';
      }
    }
    else if(m === 'use'){
      console.log(currColor)
      for (var i = 0; i < c.length; i++) {
        c[i].style.border = '1px solid black';
      }
      setBord('2px solid green');
      setNewColor(currColor)
    }

  }
 
return (
  <div
    className="Color"
    id={id}
    onClick={handleClick}
    style={{backgroundColor: currColor, border:bord, height: "10px", width: "10px" }}
  ></div>
)
}