import './App.css';
import './Grid.css';
import React, { useRef } from "react"
import Row from "./Row.jsx"



function Grid(props) {
    let rows = []

    const { width, height, selectedColor, mode, stitch } = props
    

    for (let i = 0; i < height; i++) {
        if (mode === "grid") {
            rows.push(<div><Row key={i} width={width} selectedColor={selectedColor} mode={mode} stitch={stitch}/></div>)
        }
        else if (mode === "offset") {
            if (i % 2 === 1) {
                rows.push(<div className="offset" style={{paddingRight: '5px', paddingLeft:'5px'}}><Row key={i} width={width} selectedColor={selectedColor} mode={mode} stitch={stitch}/></div>)
            }
            else {
                rows.push(<div><Row key={i} width={width} selectedColor={selectedColor} mode={mode} stitch={stitch}/></div>)

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

