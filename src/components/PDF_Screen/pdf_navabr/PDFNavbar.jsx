import React from 'react'
import "./pdf_navbar.css";
const Pdf_navbar = () => {
  return (
    <header>
    <div className="navbarr">
      <div className="left"><img id ="navimg"src={require("../../../Assets/Images/logo.jpeg")} alt="" /></div>
      <div className="mid">
        <li>PDF</li>
        <li>AI</li>
        <li>Image</li>
        <li>File</li>
      </div>
      <div className="right">
        <div className="right-img">Share</div>
        <div className="search">
          Add new tools
        </div>

      </div>
    </div>
  </header>

  )
}

export default Pdf_navbar
