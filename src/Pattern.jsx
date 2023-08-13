import './App.css';
import './Pattern.css';
import PatternPix from './PatternPix.jsx';

import React, { useState, useEffect } from "react"



function Pattern(props) {
    const { colors, width, height } = props;

    const [highlightedPix, setHighlightedPix] = useState('0101')
    const [highlightedRow, setHighlightedRow] = useState('01')

    function highlightRow(row) {
        setHighlightedRow(row);

        console.log(row)

        let rp = document.getElementsByClassName('rowNum');
        for (let i = 0; i < rp.length; i++) {
            rp[i].style.backgroundColor = '#FBFFF2'
        }
        let r = document.getElementById(row);
        r.style.backgroundColor = '#D3D4CA'
    }

    function highlightPix(id) {
        setHighlightedPix(id)
  
        console.log(id)
        let rp = document.getElementsByClassName('patternPix');
        for (let i = 0; i < rp.length; i++) {
            rp[i].style.border = '1px solid black'
         
        }
        let r = document.getElementById(id);
        r.style.border = '2px solid black';
        highlightRow(id.substring(0,2));

    }

    function getPattern() {
        let pattern = []
        let row = []
        var loc = 0;
        let counter = 1;
        let idx = '00';
        for (let i = 1; i <= height; i = i + counter) {
            let pix = []
            var idy;
            for (let j = 1; j <= width; j = j + counter) {
                if (i < 10 && j >=10){
                    idx = '0' + i.toString() + j.toString();
                }
                else if( j < 10 && i >= 10){
                    idx = i.toString() + '0' + j.toString();
                }
                else if( i < 10 && j < 10){
                    idx = '0' + i.toString() + '0' + j.toString();
                }
                else{
                    idx = i.toString() + j.toString();
                }
                 
                idy = idx.substring(0, 2)
 
                let numInRow=j;
            pix.push(<PatternPix className='patternPix' id={idx} numInRow={numInRow} bord='1px solid black' color={colors[loc]} onClick={() => {highlightPix(idx); highlightRow(idy); }}  style={{ width: '20px', height: '20px', border:'1px solid black'}} ></PatternPix>);
                loc += counter;

            }
            // loc += counter;
            row.push(<div className='rowNum' id={idy} style={{ backgroundColor: '#FBFFF2'}}>{i}<div className='rowP'>{pix}</div></div>)
        }
        pattern.push(row)
        return (pattern)
    }

    document.onkeydown = function (e) {
        console.log(e.key);
        let hpix = highlightedPix.substring(2);
        let thisPix = parseInt(hpix);
        let hrow = highlightedRow;
        let thisRow = parseInt(hrow);
        console.log(highlightedRow,highlightedPix)
        console.log(thisRow, thisPix);
        switch (e.key) {
            case 'ArrowRight':
                if(thisPix >= width && thisRow >= height){
                    break;
                }
                if (thisPix >= width){
                    thisRow = thisRow + 1;
                    thisPix = 1;
                }
                
                thisPix = thisPix + 1;
                break;

            case 'ArrowLeft':
                if(thisPix <= 1 && thisRow <= 1){
                    break;
                 }
                 if (thisPix <= 1){
                    thisRow = thisRow - 1;
                    thisPix = width;
                }
                
                 thisPix = thisPix - 1;
                break;
            case 'ArrowDown':
                if(thisRow >= height){
                    break;
                 }
                // thisPix = thisPix + width;
                thisRow = thisRow + 1;
                break;
            case 'ArrowUp':
                if(thisRow <= 1){
                   break;
                }
                // thisPix = thisPix - width;
                thisRow = thisRow - 1;
                break;
        }
        console.log(thisRow, thisPix);

        var pix;
        var row;
        if (thisPix < 10){
            pix = '0' + thisPix.toString()
        }
        else{
            pix =thisPix.toString()
        }

         if(thisRow < 10){
            row = '0' + thisRow.toString();
        }
        else{
            row = thisRow.toString();
        }
        // var row = pix.substring(1,3);

        console.log(row, pix);

        highlightPix(row+pix);
        highlightRow(row);

    };

  useEffect(() => {
console.log(highlightedRow, highlightedPix)

  }, [highlightedPix, highlightedRow])

    return (
        <div id="Pattern">
            {getPattern()}
        </div>
    )
}

export default Pattern;

