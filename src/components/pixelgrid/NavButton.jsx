// import './App.css';
import './Container.css';
import React from "react"




function NavButton(props) {
    const {image, name, toggle}= props
 
    function handleClick(){
        console.log(name)
    }
    return (
        <div>
          <img className="navButts" src={image} onClick={handleClick}></img>
        </div>
    )
}

export default NavButton;

