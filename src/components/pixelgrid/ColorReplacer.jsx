import React, { useState, useEffect } from "react"
import "./ColorReplacer.css"

export default function ColorReplacer(props) {

    const { d } = props;

    const [color1, setColor1] = useState('#ffffff');
    const [color2, setColor2] = useState('#ffffff');
    const [display, setDisplay] = useState(d);

    useEffect(() => {
        setDisplay(display)
    }, [display])

    
 function showReplace(){
    var r = document.getElementById('replace')
    if( display=== 'flex'){
        setDisplay('none')
    }
    else if( display==='none' ){
        setDisplay('flex')

    }
    }
  
    function ReplaceColor() {
        var g = document.getElementsByClassName('pixel')

        for (var i = 0; i < g.length ; i++) {
            let currColor = g[i].style.backgroundColor;
            currColor= parseColor(currColor)
            // console.log(currColor, color2, color1)
            if (currColor === color1) {
                g[i].style.backgroundColor = color2;
            }
        }
    }

    function parseColor(color) {
        var arr=[]; color.replace(/[\d+\.]+/g, function(v) { arr.push(parseFloat(v)); });
        return  "#" + arr.slice(0, 3).map(toHex).join("")
    }
    function toHex(int) {
        var hex = int.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    return (
        <div id="replaceC">
            <button
                className="noBord"
                // value='replace'
                onClick={showReplace}
            >
                replace color
            </button>
            <div id="replace" style={{ display: display }}>

            <input className='colorinp'
                id='currColor'
                type='color'
                value={color1}
                onChange={(e) => { setColor1(e.target.value) }}>
            </input>
            →
            <input className='colorinp'
                id="replaceColor"
                type='color'
                value={color2}
                onChange={(e) => { setColor2(e.target.value) }}>
            </input>
            <button
                id='doreplace'
                type='submit'
                onClick={ReplaceColor}
            >
                go
            </button>
            </div>
        </div>
    )
}