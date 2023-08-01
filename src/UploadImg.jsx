import React, { useState, useEffect } from 'react';
import './UploadImg.css'

function UploadImg(props) {
  const {hidden} = props;
  const [hid, setHid] = useState('hidden');

  const [selectedImage, setSelectedImage] = useState(null);


  useEffect(() => {
    setHid(hidden);
  }, [hidden])

  return (
    
    <div className='popup'style={{visibility: hid}}>
      <div className='pHeader'>
        Upload an image:
      <button id = 'pclose'
      onClick={() => {setHid('hidden')}}>x</button> 
      </div>
      
      <div className='pBody'>
      <input
        type="file"
        name="myImage"
        className='inp'
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      /></div>
      <div className="pfooter">
      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button className='inp' onClick={() => setSelectedImage(null)}>Remove</button>
          <button className='inp'>Use</button>

        </div>
      )}
      </div>
    </div>
 );
}

export default UploadImg;