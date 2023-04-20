import React from 'react'
import "./PdfDesc.css"
import "../../../Assets/Images/PdfTools.png"
import { Link } from 'react-router-dom'
const PdfDesc = () => {
  return (
    <div className='PdfDesc'>
    <div className='PdfCont'>
        <p id = "pdfp">All variety of tools to implement on PDF</p>
        <Link to="/Pdf">
        <button class="button-pdf" >VISIT</button>
        </Link>
        
      </div>

    <div className='PdfImage'><img id = "pdfimg"src={require("../../../Assets/Images/PdfTools.png")} alt="Tools"/></div>
    </div>
  )
}

export default PdfDesc
