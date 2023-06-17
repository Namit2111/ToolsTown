import React from 'react'
import "./Desc_sec.css"
import { Link } from 'react-router-dom'
// import "../../../Assets/Images/DesToolsre.png"
const DesDesc = ({ imagePath, description, link, backgroundColor ,locator}) => {


  return (
  
      <div className='DesDesc' style={{background:backgroundColor}}>
      <div className='DesCont'>
        <p id = {locator}></p>
        <p id = "Desp">{description}</p>
        {/* <button id="DesTools">View Tools</button> */}
        <Link to={link}>
        <button class="button-Des">VISIT</button>
        </Link>
        
      </div>

    <div className='DesImage'><img id = "Desimg" src={require(`../../../Assets/Images/${imagePath}`)} alt="Tools" crossOrigin="anonymous" /></div>
    </div>
    
  )
}

export default DesDesc
