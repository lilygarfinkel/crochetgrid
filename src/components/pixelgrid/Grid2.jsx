// import './App.css';
import './Grid.css';
import React, { useEffect, useState } from "react"
import Row from "./Row.jsx"



function Grid2(props) {
    let rows = []

    const { width, height, colors, selectedColor, mode, stitch, clicked, drawMode, bgFill, zoom, bold } = props

    var emptyCols = '#ffffff'
    var colorArr = [...Array(width)].map(e => Array(height).fill(emptyCols));
    const [colArr, setColArr] = useState(colorArr)
    const [oldArr, setOldArr] = useState(colArr)

    function changeColor(str) {
        var stop =((str.toString().length)+1) / 2;
        var x = str.slice(0, stop);
        var y = str.slice(stop);
        console.log(stop + " " ,x,y)
        var tempArr = colArr;
        tempArr[x][y] = selectedColor;
        var pix = document.getElementById(str);
        pix.style.backgroundColor = selectedColor;
        setOldArr(colArr);
        setColArr(tempArr);
    }

    function changeColorOnHover(str, dir) {
        console.log(str)
        if (dir === 'clicked') {
            changeColor(str);
        }
        else {
            if (dir === 'enter') {
                var pix = document.getElementById(str);
                pix.style.backgroundColor = selectedColor;
            }
            if (dir === 'leave') {
                // var x = str.slice(0, 1);
                // var y = str.slice(1);
                var stop =((str.toString().length)+1) / 2;
                var x = str.slice(0, stop);
                var y = str.slice(stop);
                console.log(stop ,x,y)

                var pix = document.getElementById(str);
                var oldCol = oldArr[x][y];
                pix.style.backgroundColor = oldCol;
                var tempArr = colArr;
                tempArr[x][y] = oldCol;
                console.log(oldCol, x,y)
                // setOldArr(colArr);
                // setColArr(tempArr);
            }
        }

    }

    function drawgrid() {
        var g = [];
        for (var i = 0; i < height; i++) {
            var r = [];
            for (var j = 0; j < colorArr[i].length; j++) {
                // labels
                if (i == 0) {
                    r.push(<div><div className='rowLabel'
                        style={{ height: '20px', width: '20px' }}> </div>
                        <div className={'pixLabel'}
                            style={{ width: '20px', height: '20px' }}>{j + 1}</div></div>)
                }
                //push pixels
                else {
                    let is = i.toString();
                    let js = (j + 1).toString();
                    let str = is + js;
                    r.push(<div id={str}
                        className={'pix'}
                        onClick={() => (changeColorOnHover(str, 'clicked'))}
                        onMouseEnter={() => (changeColorOnHover(str, 'enter'))}
                        onMouseLeave={() => (changeColorOnHover(str, 'leave'))}
                        style={{ backgroundColor: colArr[i][j], width: '20px', height: '20px', border: '1px solid black' }}>

                    </div>)

                }

            }
            //labels
            if (i == 0) {
                g.push(<div className={'row'}>
                    <div className='rowLabel'
                        style={{ height: '20px', width: '20px' }}>{''} </div>
                    <div className={'rowPix'}>{r}</div></div>);

            }
            //push row
            else {
                g.push(<div className={'row'}>
                    <div className='rowLabel'
                        style={{ height: '20px', width: '20px' }}>{i}</div>
                    <div className={'rowPix'}>{r}</div></div>);
            }
        }
        return g;
    }

    useEffect(() => {
        drawgrid()
    }, [colArr])

    return (
        <div id="drawingPanel">
            <div id="pixels" className='grid2'>
                {drawgrid()}
            </div>

        </div>
    )
}

export default Grid2;

