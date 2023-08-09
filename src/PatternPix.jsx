import './App.css';
import './Pattern.css';

import React, { useState, useEffect } from "react"



function PatternPix(props) {
    const {id, rowN, numInRow } = props;

   
    return (

        <div 
        className='patternPix' 
        id={id} 
        // onClick={highlightPix} 
        style={{width: '20px', height: '20px'}} >
         {numInRow}</div>);

}

export default PatternPix;

