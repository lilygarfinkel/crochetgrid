import './App.css';
import './Grid.css';
import React, { useRef } from "react"
import Row from "./Row.jsx"



function Grid(props) {
    let rows = []

    const { width, height, selectedColor, mode, stitch, clicked, drawMode, bgFill, zoom} = props
    var color = selectedColor; 
    var borderB = false;
    for (let i = 0; i < height; i++) {
        if ((i+1) % 5 == 0){
            borderB = true;
        }
        else{
            borderB = false;
        }
        if (mode === "grid") {
            rows.push(<div><Row key={i} width={width} selectedColor={color} mode={mode} stitch={stitch} clicked={clicked} drawMode={drawMode} bgFill={bgFill} zoom={zoom} borderB={borderB}/></div>)
        }
        else if (mode === "offset") {
            if (i % 2 === 1) {
                rows.push(<div className="offset" style={{paddingRight: '5px', paddingLeft:'5px'}}><Row key={i} width={width} selectedColor={color} mode={mode} stitch={stitch} clicked={clicked} drawMode={drawMode} bgFill={bgFill} zoom={zoom} borderB={borderB}/></div>)
            }
            else {
                rows.push(<div><Row key={i} width={width} selectedColor={color} mode={mode} stitch={stitch} clicked={clicked} drawMode={drawMode} bgFill={bgFill} zoom={zoom} borderB={borderB}/></div>)

            }

        }
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

