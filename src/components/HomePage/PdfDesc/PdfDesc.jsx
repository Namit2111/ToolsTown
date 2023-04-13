import React from 'react'
import "./PdfDesc.css"
import "../../../Assets/Images/PdfTools.png"
const PdfDesc = () => {
  return (
    <div className='PdfDesc'>
    <div className='PdfCont'>
        <p>All variety of tools to implement on PDF</p>
      </div>

    <div className='PdfImage'><img src={require("../../../Assets/Images/PdfTools.png")} alt="Tools"/></div>
    </div>
  )
}

export default PdfDesc
