import './App.css';
import './Pattern.css';
import PatternPix from './PatternPix.jsx';

import React, { useState, useEffect } from "react"



function Pattern(props) {
    const { colors, width, height, start } = props;

    const [highlightedPix, setHighlightedPix] = useState(0)
    const [highlightedRow, setHighlightedRow] = useState(0)

    function highlightRow(row) {

        setHighlightedRow(row);
        console.log(row)

        let rp = document.getElementsByClassName('rowNum');
        for (let i = 0; i < rp.length; i++) {
            rp[i].style.backgroundColor = '#FBFFF2'
        }
        let rstring  = row;
        let r = document.getElementById('row' + rstring);
        r.style.backgroundColor = '#D3D4CA'
    }

    function highlightPix(id) {
        setHighlightedPix(id)

        let rp = document.getElementsByClassName('patternPix');
        for (let i = 0; i < rp.length; i++) {
            rp[i].style.border = '1px solid black'
         
        }
        let r = document.getElementById(id);
        r.style.border = '2px solid black';
        // console.log(r)

        highlightRow(r.data-row);
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
                let r = i.toString();
                let numInRow=j+1;
                pix.push(<PatternPix className='patternPix' id={idx}  rowN={r} numInRow={numInRow} onClick={() => { highlightPix(idx); }}  style={{ backgroundColor: colors[loc], width: '20px', height: '20px' }} ></PatternPix>);
                loc += counter;

            }
            // loc += counter;
            row.push(<div className='rowNum' id={'row' + i.toString()} onClick={() => { highlightRow(i) }}  style={{ backgroundColor: '#FBFFF2'}}>{i + 1}<div className='rowP'>{pix}</div></div>)
        }
        pattern.push(row)
        return (pattern)
    }

    document.onkeydown = function (e) {
        console.log(e.key);
        switch (e.key) {

            case 'ArrowRight':
               
                 if(highlightedPix >= (width*height)-1){
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

  useEffect(() => {
console.log(highlightedRow)
  }, [])

    return (
        <div id="Pattern">
            {getPattern()}
        </div>
    )
}

export default Pattern;

