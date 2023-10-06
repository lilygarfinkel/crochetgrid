import React, { useState, useRef, useEffect, useContext } from "react"
import './NavContainer.css';

function NavContainer() {

  const [fname, setFName] = useState('untitled');

  return (
    <div className='navContainer'>
      <div className='inputPC'>
        {/* <input className='inputP' id='docname' type='text' value={fname} onChange={(e) => { setFName(e.target.value)}}></input> */}
      </div>
    </div>

  );
}

export default NavContainer;
