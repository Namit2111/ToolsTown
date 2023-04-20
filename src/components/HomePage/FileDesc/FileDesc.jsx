import React from 'react'
import "./FileDesc.css"
import "../../../Assets/Images/FileTools.png"
import { Link } from 'react-router-dom'
const FileDesc = () => {
  return (
    
      <div className='FileDesc'>
      <div className='FileCont'>
        <p id = "filep">All variety of File tools to make your work easy</p>
        <Link to ="/Docs"><button class="button-file" >VISIT</button></Link>
        
      </div>

    <div className='FileImage'><img  id = "fileimg"src={require("../../../Assets/Images/FileTools.png")} alt="Tools"/></div>
    </div>
    
  )
}

export default FileDesc
