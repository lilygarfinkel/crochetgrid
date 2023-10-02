import './Symbol.css';
import './Container.css';
import React from "react"


function Symbol(props) {
    const {id, src, text, h}= props
 
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
    return (
        <div className='scontainer'>
            <div id={'t'+ id} className='settingstext' style={{display:'none', backgroundColor:'white', borderRadius:'5px', zIndex:10, position:'absolute', marginLeft:'30px', marginBottom:'30px',padding:'4px'}}>{text}</div>  
            <div id='one'>
            <img  id={id} className="settIcon" src={src} onMouseEnter={handleHover} onMouseLeave={exitHover} style={{ height: '25px', width: h }} ></img>
          </div>
        </div>
    )
}

export default Symbol;
