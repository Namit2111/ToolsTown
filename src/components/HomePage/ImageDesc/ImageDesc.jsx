import React from 'react'
import "./ImageDesc.css"
import "../../../Assets/Images/ImageTools.png"
import { Link } from 'react-router-dom'
const ImageDesc = () => {
  return (
    
      <div className='ImageDesc'>
      <div className='ImageCont'>
        <p id = "imgp">All variety of Image tools to make your work easy</p>
        <Link to="/Image">
        <button class="button-img" >VISIT</button>
        </Link>
        
      </div>

    <div className='ImageImage'><img id= "imgimg"src={require("../../../Assets/Images/ImageTools.png")} alt="Tools"/></div>
    </div>
    
  )
}

export default ImageDesc
