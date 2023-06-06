import './App.css';
import './Grid.css';
import React, { useRef } from "react"
import Row from "./Row.jsx"



function Grid(props) {
    let rows = []

    const { width, height, selectedColor, mode, stitch, clicked} = props
    

    for (let i = 0; i < height; i++) {
        if (mode === "grid") {
            rows.push(<div><Row key={i} width={width} selectedColor={selectedColor} mode={mode} stitch={stitch} clicked={clicked}/></div>)
        }
        else if (mode === "offset") {
            if (i % 2 === 1) {
                rows.push(<div className="offset" style={{paddingRight: '5px', paddingLeft:'5px'}}><Row key={i} width={width} selectedColor={selectedColor} mode={mode} stitch={stitch} clicked={clicked}/></div>)
            }
            else {
                rows.push(<div><Row key={i} width={width} selectedColor={selectedColor} mode={mode} stitch={stitch} clicked={clicked}/></div>)

            }

        }
    }

    return (
        <div id="drawingPanel">
            <div id="pixels" key={'pix'}>
                {rows}
            </div>

        </div>
    )
}

export default Grid;

