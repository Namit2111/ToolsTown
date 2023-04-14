import React from 'react'
import "./Loader.css"
// import "../../../Assets/Images/logo.jpeg"
const Loader = () => {
  return (
    <div className='loader-wrapper'>
         <img id = "logoimg" src={require("../../../Assets/Images/logo.jpeg")} alt="Tools"/>
      
  
    </div>
  )
}

export default Loader
