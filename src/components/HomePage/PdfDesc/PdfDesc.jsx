import React from 'react'
import "./PdfDesc.css"
import "../../../Assets/Images/PdfTools.png"
const PdfDesc = () => {
  return (
    <div className='PdfDesc'>
    <div className='PdfCont'>
        <p id = "pdfp">All variety of tools to implement on PDF</p>
        <button class="button-pdf" >VISIT</button>
      </div>

    <div className='PdfImage'><img id = "pdfimg"src={require("../../../Assets/Images/PdfTools.png")} alt="Tools"/></div>
    </div>
  )
}

export default PdfDesc
