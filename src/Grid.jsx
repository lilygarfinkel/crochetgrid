import './App.css';
import './Grid.css';
import React from "react"
import Row from "./Row.jsx"



function Grid(props) {
    let rows = []

    const { width, height, selectedColor, mode, stitch, clicked, drawMode, bgFill, zoom} = props
    var color = selectedColor; 
    let borderB = false;
    let x =0;
    let y;

    for (let i = -1; i < height; i++) {
        //bold every 5 bottom borders
        if ((i+1) % 5 === 0){
            borderB = true;
        }
        else{
            borderB = false;
        }

        // if first column, set number holders
        if(i === -1){
            y=true;
        }
        else{
            y=false;
        }
        //draw grid
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

