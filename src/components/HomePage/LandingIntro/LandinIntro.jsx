import React from "react";
import "./LandinIntro.css"
import "../../../Assets/Images/Intro.png"
import background from "../../../Assets/Images/background.jpg"
const LandinIntro = () => {


  return (
    <div className="Intro" style={{ backgroundImage: `linear-gradient(transparent, black),url(${background})` }}>
      <h1 id = "LIh">Tools Town tools are made for you</h1>

    {/* <div className='IntroImage'><img src={require("../../../Assets/Images/Intro.png")} alt="Tools"/></div> */}
      
 
    </div>
  )
}

export default LandinIntro
