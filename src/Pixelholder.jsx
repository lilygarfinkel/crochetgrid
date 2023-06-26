import React, { useState,useEffect } from "react"
import "./Pixelholder.css"

export default function Pixelholder(props) {
  const { stitch, zoom, x } = props


return (
  <div
    className="pixelH"
    style={{height: stitch + zoom + "px", width: 15 + zoom + "px" }}
  >{x}</div>
)
}