import './Container.css';
import React from "react"
import { DataStore } from '@aws-amplify/datastore';
import { Grid } from '../../models/';

function SaveButton(props) {
    const {fname,  width, height, stSize, offset, boldLines}= props
 
    var off; 
    if(offset === 'offset'){
      off = true;
    }
    else{
      off = false;
    }

    var w = parseInt(width);
    var h = parseInt(height);
    var st = parseInt(stSize);
    var bl = parseInt(boldLines);
   
    var colors = []
    var g = document.getElementsByClassName('pixel')
     for (var i = 0; i <g.length-1; i++){
      let c = g[i].style.backgroundColor;
     //  console.log(c);
      colors.push(c);
     }
    const saveInfo = async (e) => {
   

      console.log(fname);
        e.preventDefault();
        await DataStore.save(
          new Grid({
          "fname": fname,
          "colors": colors,
          "width": w,
          "height": h,
          "stitch": st,
          "offset": off,
          "linebold": bl
        })
      );
    }

    return (
        <div className='savebutt'>
          <button onClick={saveInfo}> 
            Save
          </button>
        </div>
    )
}

export default SaveButton;
