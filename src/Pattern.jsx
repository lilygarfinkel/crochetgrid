import './App.css';
import './Pattern.css';

import React, { useState } from "react"



function Pattern(props) {
    const { colors, width, height, start } = props;

    const [highlightedPix, setHighlightedPix] = useState('0')
    const [highlightedRow, setHighlightedRow] = useState('0')

    function highlightRow(row) {
       
        setHighlightedRow(row)

        let rp = document.getElementsByClassName('rowNum');
        for (let i = 0; i < rp.length; i++) {
            rp[i].style.backgroundColor = '#FBFFF2'
        }
        let r = document.getElementById('row' + row.toString());
        r.style.backgroundColor = '#D3D4CA'
    }

    function highlightPix(id) {
        setHighlightedPix(id)
        let rp = document.getElementsByClassName('patternPix');
        for (let i = 0; i < rp.length; i++) {
            rp[i].style.border = '1px solid black'
         
        }
        if(height % (id+1) === 0){
            highlightRow((height/id+1));
        }
        let r = document.getElementById(id);
        r.style.border = '2px solid black';

    }

    function getPattern() {
        let pattern = []
        let row = []
        var loc = 0;
        let counter = 1;
        for (let i = 0; i < height; i = i + counter) {
            let pix = []
            for (let j = 0; j < width; j = j + counter) {
                let idx = loc;//i.toString() + j.toString();
                pix.push(<div className='patternPix' onClick={() => { highlightPix(idx); }} id={idx} style={{ backgroundColor: colors[loc], width: '20px', height: '20px' }} >{j + 1}</div>);
                loc += counter;

            }
            // loc += counter;
            row.push(<div className='rowNum' id={'row' + i.toString()} onClick={() => { highlightRow(i) }}>{i + 1}<div className='rowP'>{pix}</div></div>)
        }
        pattern.push(row)
        return (pattern)
    }

    document.onkeydown = function (e) {
        console.log(e.key);
        switch (e.key) {

            case 'ArrowRight':
               
                 if(highlightedPix >= width*height-1){
                    break;
                 }
                highlightPix(highlightedPix + 1)
                break;

            case 'ArrowLeft':
                if(highlightedPix <= 0){
                    break;
                 }
                highlightPix(highlightedPix - 1)
                break;
            case 'ArrowDown':
                if(highlightedRow >= height-1){
                    break;
                 }
                highlightPix(highlightedPix + width)
                highlightRow(highlightedRow + 1)
                break;
            case 'ArrowUp':
                if(highlightedPix <= width){
                   break;
                }
                highlightPix(highlightedPix - width)
                highlightRow(highlightedRow - 1)
                break;
        }
    };
    return (
        <div id="Pattern">
            {getPattern()}
        </div>
    )
}

export default Pattern;

