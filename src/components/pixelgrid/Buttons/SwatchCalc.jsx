import './SwatchCalc.css';
// import './Grid.css';
import React, { useEffect, useState } from "react"
import seventeen from '../icons/17 stitches.png'



function SwatchCalc(props) {

  const { setW, setH } = props;

const [wid, setWid] = useState(110);
const [hid, setHid] = useState(110);

  function calcSize() {
    var win = document.getElementById('swatchstW').value;
    var wst = document.getElementById('swatchW').value;
    var hin = document.getElementById('swatchstH').value;
    var hst = document.getElementById('swatchH').value;

    console.log(win, wst, hin, hst)
    var winp = document.getElementById('swatchWinch').value;
    var hinp = document.getElementById('swatchHinch').value;

    var wsize = wst * winp / win;
    var hsize = hst * hinp / hin;

    var wtotst = document.getElementById('swatchWstitch');
    var w = Math.floor(wsize);
    setWid(w);
    wtotst.innerHTML =w;

    var htotst = document.getElementById('swatchHstitch');
    var h = Math.floor(hsize);
    setHid(h);
    htotst.innerHTML = h;

  }

  function close() {
    document.getElementById('swatchSet').style.display = 'none'
  }

  function apply() {
    // var w = document.getElementById('swatchWstitch').innerHTML;
    // var h = document.getElementById('swatchHstitch').innerHTML;
    var w = wid;
    var h = hid;
    setW(w);
    setH(h);
    document.getElementById('sizew').value=w;
    document.getElementById('sizeh').value=h;
    document.getElementById('swatchSet').style.display = 'none';

  }

  function changeUnits(e) {
    var u;
    var n;
    if (e === 'in') {
      u = 'inches';
      n = 1 / 2.54;
    }
    else if (e === 'cm') {
      u = 'centimeters';
      n = 2.54;
    }
    var un = document.getElementsByClassName('units');
    for (var i = 0; i < un.length; i++) {
      un[i].innerHTML = u;
    }
    var num = document.getElementsByClassName('swatchbuttU');
    for (var i = 0; i < num.length; i++) {
      num[i].value = Math.round(num[i].value * n);
     }
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
          <fieldset>
            <div className='radio'>
              <div className='radios'>
                <input type='radio' className='radiob' id='cm' name='units' value='cm' onChange={e => changeUnits(e.target.value) } />
                <label className='rlabel' for="cm">CM</label>
              </div>
              <div className='radios'>
                <input type='radio' id='in' className='radiob' name='units' value='in' onChange={e => changeUnits(e.target.value) } />
                <label className='rlabel' for="in">IN</label>
              </div>
            </div>
          </fieldset>

          <div id='pt1'>
            <img id='swatchimg' src={seventeen} style={{ width: '150px' }} />

            <div className='swatchdims'>
              <h5 className='desc'>enter the length and number of stitches accross your swatch:</h5>
              <div id='swatchWidth' className='swatchButts'>
                <h5>width: </h5>
                <div className='swatchinp'>
                  <input id='swatchW' className='swatchbutt' type='number' defaultValue='10' onChange={calcSize} />
                  <p>stitches</p>
                </div>
                x
                <div className='swatchinp'>
                  <input id='swatchstW' className='swatchbuttU' type='number' defaultValue='3' onChange={calcSize} />
                  <p className='units'>inches</p>
                </div>
              </div>
              <h5 className='desc'>enter the height and number of rows in your swatch:</h5>
              <div id='swatchHeight' className='swatchButts'>
                <h5>height: </h5>
                <div className='swatchinp'>
                  <input id='swatchH' className='swatchbutt' type='number' defaultValue='8' onChange={calcSize} />
                  <p>rows</p>
                </div>
                x
                <div className='swatchinp'>
                  <input id='swatchstH' className='swatchbuttU' type='number' defaultValue='3' onChange={calcSize} />
                  <p className='units'>inches</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id='swatchSizeR'>
          <h4>2. Grid Dimensions:</h4>
          <h5 className='desc'> enter the height and width you want your final project to be:</h5>
          <div className='swatchansdims'>
            <div className='swatchButts'>
              <h5>desired width:</h5>
              <div className='swatchinp'>
                <input className='swatchbuttU' id='swatchWinch' defaultValue='33' onChange={calcSize} />
                <p className='units'>inches </p>
              </div>
            </div>
            <div className='swatchButts'>
              <h5>desired height:</h5>
              <div className='swatchinp'>
                <input className='swatchbuttU' id='swatchHinch' defaultValue='26' onChange={calcSize} />
                <p className='units'>inches </p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div id='calculated'>
        <div className='swatchinp'>
          <div className='swatchans' id='swatchWstitch' >{wid}</div>
          <p className='lbl'>stitches</p>
        </div>x
        <div className='swatchinp'>
          <div className='swatchans' id='swatchHstitch'> 69</div>
          <p className='lbl'>rows</p>
        </div>
      </div>
      <div id='bottombutts'>
        <button id='apply' onClick={apply} >apply</button>
        <button id='cancel' >cancel</button>
      </div>
    </div>

  )
}


export default SwatchCalc;



