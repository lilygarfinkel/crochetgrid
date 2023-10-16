import React, { useState,useEffect } from "react"
import "./Color.css"

export default function Color(props) {

const {id, mode, setColorC, selectedColor} = props;

const [currColor, setColor] = useState('#ffffff');
const [bord, setBord] = useState('1px solid black');
const [m, setMode] = useState(mode);


useEffect(() => {
  setMode(mode);
  setColorC(currColor)
  // setBord('1px solid black')
}, [mode, currColor, bord])

  function handleClick(id){
    var c = document.getElementsByClassName('colorinp');
      // console.log(currColor)
      // setColor(currColor)
      for (var j = 0; j < c.length; j++) {
        var i = (j.toString() + 'c')
        if(i ===id){
          c[j].style.border = '3px solid black';
          let col =c[j].value
          // console.log(col)
          setColor(col)
        }
        else{
        c[j].style.border = '1px solid black';
        }
      }
      setBord('3px solid black');

    }
    

  
return (
  // <div className="Color" id={id}> 
    <input className='colorinp' 
           id={id}
           type='color' 
           value={currColor} 
           onClick={()=>{handleClick(id)}}
           onChange={(e)=>{setColor(e.target.value)}}
           style={{border:bord}}>
     </input>
  // </div>
)
}