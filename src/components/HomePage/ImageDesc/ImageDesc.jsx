import React from 'react'
import "./ImageDesc.css"
import "../../../Assets/Images/ImageTools.png"
const ImageDesc = () => {
  return (
    
      <div className='ImageDesc'>
      <div className='ImageCont'>
        <p id = "imgp">All variety of Image tools to make your work easy</p>
        <button class="button-img" >VISIT</button>
      </div>

    <div className='ImageImage'><img id= "imgimg"src={require("../../../Assets/Images/ImageTools.png")} alt="Tools"/></div>
    </div>
    
  )
}

export default ImageDesc
