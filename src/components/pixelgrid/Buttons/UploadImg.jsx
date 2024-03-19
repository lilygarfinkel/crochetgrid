import './UploadImg.css';
import React, { useEffect, useState } from "react"

import Jimp from 'jimp';


function UploadImg(props) {

  var openFile = function(file) {
    // var input = file.target;
    // var reader = new FileReader();
    // var output = document.getElementById('output');
    // reader.onload = function(){
    //   var dataURL = reader.result;
    //   output.src = dataURL;
    // };
    // console.log(output);


    Jimp.default.read(file.target, function (err, image) {
      console.log(image.getPixelColor(0,0))})

    // reader.readAsDataURL(input.files[0]);
  };

  function readFile(e){

    Jimp.read(e.target, function (err, image) {
    console.log(image.getPixelColor(0,0)) // returns the colour of that pixel e.g. 0xFFFFFFFF
});
  }

  return (

    <div id='UploadImg' style={{ display: 'none' }}>
      <input type='file' accept='image/*' onChange={e=>{openFile(e)}} /><br></br>
      <img id='output' style={{height:'100px', width:'100px'}}></img>
      {/* <button onClick={readFile}></button> */}
    </div>

  )
}


export default UploadImg;



