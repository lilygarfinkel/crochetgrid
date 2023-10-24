import '.././Container.css';
import React from "react"
import { DataStore } from '@aws-amplify/datastore';
import { Grid } from '../../../models';
import saveicon from '.././icons/save.png'

function SaveButton(props) {
    const {id, text, fname, src,  width, height, stSize, offset, boldLines}= props
 
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

     function handleHover(){
      let tid = 't' + id;
      let t = document.getElementById(tid);
      t.style.display='flex'
  }
  function exitHover(){
      let tid = 't' + id;
      let t = document.getElementById(tid);
      t.style.display='none'
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
          {/* <button >  */}
          <div id={'t'+ id} className='settingstext' style={{display:'none', backgroundColor:'white', borderRadius:'5px', zIndex:10, position:'absolute', marginLeft:'30px', marginBottom:'30px',padding:'4px'}}>{text}</div>  
            <img onClick={saveInfo} src={src} style={{height:'20px'}}  onMouseEnter={handleHover} onMouseLeave={exitHover} /> 
          {/* </button> */}
        </div>
    )
}

export default SaveButton;
