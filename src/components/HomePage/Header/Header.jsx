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
  })



  return (
   
    <header>
    <div className={navbar ? "navbar_active" : "navbar"}>
    <div className="left">Your Tools</div>
    <div className="mid">
      <li>PDF</li>
      <li>AI</li>
      <li>Image</li>
      <li>File</li>
    </div>
    <div className="right">
      <div className="right-img">img</div>
      <div className="right-search"><form>
      <label>
        <input id = "search" type="text" />
      </label>
    </form></div>
      
    </div>
  </div>
  </header>

  )
}

export default Header
