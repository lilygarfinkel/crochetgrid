// import './App.css';
import './Pattern.css';

import React, { useState, useEffect } from "react"



function PatternRow(props) {
    const {id, numRow, bg } = props;

   const [background, setBg] = useState(bg);

   function highlightRow(){
    setBg('#FBFFF2')
   }


    return (

        <div 
        className='rowP' 
        id={id} 
        onClick={highlightRow} 
        style={{backgroundColor: background,width: '20px', height: '20px'}} >
         {numRow}</div>);

}

export default PatternRow;

