import React from "react";


export default function SwatchesPicker(props) {
 const { onChange, presetColors  } = props
 
  return (
         <div className="picker__swatches">
        {presetColors.map((presetColor) => (
          <button
            key={presetColor}
            className="preset"
            style={{ background: presetColor, height: "10px", width: "10px", border: '1px solid black' ,  padding: '2px', margin: '2px' }}
            onClick={() => onChange(presetColor)}
           
          />
        ))}
      </div>
  );
};
