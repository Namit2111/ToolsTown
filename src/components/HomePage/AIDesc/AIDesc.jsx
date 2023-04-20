import React from 'react'
import "./AIDesc.css"
import { Link } from 'react-router-dom'
// import "../../../Assets/Images/AiToolsre.png"
const AIDesc = () => {
  return (
    
      <div className='AIDesc'>
      <div className='AICont'>
        <p id = "aip">All variety of AI tools to make your work easy</p>
        {/* <button id="AiTools">View Tools</button> */}
        <Link to="/Ai">
        <button class="button-ai">VISIT</button>
        </Link>
        
      </div>

    <div className='AIImage'><img id = "aiimg" src={require("../../../Assets/Images/AiTools.png")} alt="Tools" crossOrigin="anonymous" /></div>
    </div>
    
  )
}

export default AIDesc
