import './App.css';
import './Grid.css';
import React, { useRef } from "react"
import Row from "./Row.jsx"



function Grid(props) {
    let rows = []

    const { width, height, selectedColor, mode, stitch, clicked, drawMode, bgFill, zoom} = props
    var color = selectedColor; 
    var borderB = false;
    var x =0;
    let y;

    for (let i = 0; i < height+1; i++) {
        if ((i) % 5 === 0){
            borderB = true;
        }
        else{
            borderB = false;
        }

        if(i ===0){
            y=true;
        }
        else{
            y=false;
        }
        if (mode === "grid") {
            rows.push(<div><Row key={i} width={width} selectedColor={color} mode={mode} stitch={stitch} clicked={clicked} drawMode={drawMode} bgFill={bgFill} zoom={zoom} borderB={borderB}  x={x} y={y}/></div>)
        }
        else if (mode === "offset") {
            if (i % 2 === 1) {
                rows.push(<div className="offset" style={{paddingRight: '5px', paddingLeft:'5px'}}><Row key={i} width={width} selectedColor={color} mode={mode} stitch={stitch} clicked={clicked} drawMode={drawMode} bgFill={bgFill} zoom={zoom} borderB={borderB}  x={x} y={y}/></div>)
            }
            else {
                rows.push(<div><Row key={i} width={width} selectedColor={color} mode={mode} stitch={stitch} clicked={clicked} drawMode={drawMode} bgFill={bgFill} zoom={zoom} borderB={borderB}  x={x} y={y}/></div>)

            }

        }
        x +=1;
    }

    return (
        <div id="drawingPanel">
            <div id="pixels">
                {rows}
            </div>

        </div>
    )
}

export default Grid;

