// import './App.css';
import './Grid.css';
import React, {useEffect} from "react"
import Row from "./Row.jsx"



function Grid(props) {
    let rows = []

    const { width, height, selectedColor, mode, stitch, clicked, drawMode, bgFill, zoom, bold} = props
    var color = selectedColor; 
    let borderB = false;
    let x =0;
    let y;

    function drawgrid(){
    for (let i = -1; i < height; i++) {
        //bold every x bottom borders
        if ((i+1) % bold === 0){
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
            rows.push(<div><Row key={i} width={width} selectedColor={color} mode={mode} stitch={stitch} clicked={clicked} drawMode={drawMode} bgFill={bgFill} zoom={zoom} borderB={borderB}  x={x} y={y}  bold={bold}/></div>)
        }
        else if (mode === "offset") {
            if (i % 2 === 1) {
                rows.push(<div className="offset" style={{paddingRight: '5px', paddingLeft:'5px'}}><Row key={i} width={width} selectedColor={color} mode={mode} stitch={stitch} clicked={clicked} drawMode={drawMode} bgFill={bgFill} zoom={zoom} borderB={borderB}  x={x} y={y}  bold={bold}/></div>)
            }
            else {
                rows.push(<div><Row key={i} width={width} selectedColor={color} mode={mode} stitch={stitch} clicked={clicked} drawMode={drawMode} bgFill={bgFill} zoom={zoom} borderB={borderB}  x={x} y={y}  bold={bold}/></div>)

            }

        }
        x +=1;
    }
    return rows;
}


    useEffect(() => {
        drawgrid()
      }, [bold])
    return (
        <div id="drawingPanel">
            <div id="pixels">
                {drawgrid()}
            </div>

        </div>
    )
}

export default Grid;

