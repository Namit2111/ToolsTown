import React, { useState, useEffect } from "react"
import "./header.css"
const Header = () => {

  const [navbar, setNavbar] = useState(false)
  
  const changeBackground = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 100) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()

    window.addEventListener("scroll", changeBackground)

  }, [])



  return (

    <header>
      <div className={`navbar ${navbar ? "active" : ""}`}>
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

export default Header
