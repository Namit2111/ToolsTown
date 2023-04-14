import React from 'react'
import "./AIDesc.css"
import "../../../Assets/Images/AiTools.png"
const AIDesc = () => {
  return (
    
      <div className='AIDesc'>
      <div className='AICont'>
        <p>All variety of AI tools to make your work easy</p>
        {/* <button id="AiTools">View Tools</button> */}
      </div>

    <div className='AIImage'><img src={require("../../../Assets/Images/AiTools.png")} alt="Tools"/></div>
    </div>
    
  )
}

export default AIDesc
