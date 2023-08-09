import './App.css';
import './Pattern.css';

import React, { useState, useEffect } from "react"



function PatternPix(props) {
    const {id, rowN, numInRow } = props;

    const [bord, setBord] = useState('1px solid black')
  
    function highlightPix() {

        let rp = document.getElementsByClassName('patternPix');
        for (let i = 0; i < rp.length; i++) {
            rp[i].style.border = '1px solid black'
         
        }
        setBord('2px solid black');

    }

    
    return (

        <div 
        className='patternPix' 
        id={id} 
        onClick={highlightPix} 
        style={{width: '20px', height: '20px' , border:bord}} >
         {numInRow}</div>);

}

export default PatternPix;

