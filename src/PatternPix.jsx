import './App.css';
import './Pattern.css';

import React, { useState, useEffect } from "react"



function PatternPix(props) {
    const {id, numInRow, color } = props;

   
    return (

        <div 
        className='patternPix' 
        id={id} 
        // onClick={highlightPix} 
        style={{backgroundColor: color,width: '20px', height: '20px'}} >
         {numInRow}</div>);

}

export default PatternPix;

