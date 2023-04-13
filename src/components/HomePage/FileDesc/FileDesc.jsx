import React from 'react'
import "./FileDesc.css"
import "../../../Assets/Images/FileTools.png"
const FileDesc = () => {
  return (
    
      <div className='FileDesc'>
      <div className='FileCont'>
        <p>All variety of File tools to make your work easy</p>
      </div>

    <div className='FileImage'><img src={require("../../../Assets/Images/FileTools.png")} alt="Tools"/></div>
    </div>
    
  )
}

export default FileDesc
