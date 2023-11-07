import './SwatchCalc.css';
// import './Grid.css';
import React, { useEffect, useState } from "react"
import seventeen from './icons/17 stitches.png'



function SwatchCalc() {
    function calcSize(){
        var win = document.getElementById('swatchstW').value;
        var wst = document.getElementById('swatchW').value;
        var hin = document.getElementById('swatchstH').value;
        var hst = document.getElementById('swatchH').value;
    
        console.log(win, wst, hin, hst)
        var winp = document.getElementById('swatchWinch').value;
        var hinp = document.getElementById('swatchHinch').value;
    
        var wsize =wst * winp / win;
        var hsize = hst * hinp / hin;
    
        var wtotst = document.getElementById('swatchWstitch');
        wtotst.innerHTML = wsize;
    
        var htotst = document.getElementById('swatchHstitch');
        htotst.innerHTML = hsize;
    
    
    
      }

      function close(){
        document.getElementById('swatchSet').style.display = 'none'
      }

    return (
        
        <div id='swatchSet' style={{ display: 'none' }}>
            <div id='heading'>
        <h3 id='swatchtit'>Calculate Size from Swatch</h3>
        <button id='close' onClick={close}>x</button>
        </div>
        <div id='swatchSize'>
          <div id='swatchSizeL'>
            <h4>1. Swatch Dimensions:</h4>
            <h5 className='desc'>enter both the height and width (in stitches and inches) of your swatch.</h5>
            <div id='swatchWidth' className='swatchButts'>
            <h5>width: </h5>     
                <div className='swatchinp'>
                <input id='swatchW' className='swatchbutt' type='number' defaultValue='10' onChange={calcSize}/>
                <p>stitches</p>
              </div>
              x
              <div className='swatchinp'>
                <input id='swatchstW' className='swatchbutt' type='number' defaultValue='1' onChange={calcSize}/>
                <p>inches</p>
              </div>
            </div>
            <div id='swatchHeight' className='swatchButts'>
            <h5>height: </h5>
              <div className='swatchinp'>
                <input id='swatchH' className='swatchbutt' type='number'defaultValue='10' onChange={calcSize}/>
                <p>rows</p>
              </div>
              x
              <div className='swatchinp'>
                <input id='swatchstH' className='swatchbutt' type='number' defaultValue='1' onChange={calcSize}/>
                <p>inches</p>
              </div>
            </div>
          </div>
          <div id='swatchSizeR'>
          <h4>2. Grid Dimensions:</h4>
          <h5 className='desc'> enter the height and width you want your final project to be:</h5>
            <div className='swatchButts'>
              <h5>desired width:</h5>
              <div className='swatchinp'>
                <input className='swatchbutt' id='swatchWinch' defaultValue='1' onChange={calcSize}/>
                <p>inches </p>
              </div>=
              <div className='swatchinp'>
                <div className='swatchans' id='swatchWstitch'>10 </div>
                <p>stitches</p>
              </div>
            </div>
            <div className='swatchButts'>
            <h5>desired height:</h5>        
                 <div className='swatchinp'>
                <input className='swatchbutt' id='swatchHinch' defaultValue='1' onChange={calcSize}/>
                <p>inches </p>
              </div> =
              <div className='swatchinp'>
                <div className='swatchans' id='swatchHstitch'> 10</div>
                <p>rows</p>
              </div>
            </div>
          </div>
        </div>
        <img id='swatchimg' src={seventeen} style={{ width: '150px' }} />
        <div id='bottombutts'> 
        <button id='apply' >apply</button>
        <button id='cancel' >cancel</button>
        </div> 
        </div>
    )
}

export default SwatchCalc;



