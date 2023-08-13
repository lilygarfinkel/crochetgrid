import './App.css';
import './Pattern.css';

import React, { useState, useEffect } from "react"



function PatternPix(props) {
    const {id, numInRow, color, bord } = props;

   const [border, setBorder] = useState(bord);

   function highlightPix(){
    setBorder('2px solid black')
   }

   useEffect(() => {
    
    setBorder(bord)
      }, [bord])

    return (

        <div 
        className='patternPix' 
        id={id} 
        // onClick={highlightPix} 
        style={{backgroundColor: color,width: '20px', height: '20px', border: border}} >
         {numInRow}</div>);

}

export default PatternPix;

