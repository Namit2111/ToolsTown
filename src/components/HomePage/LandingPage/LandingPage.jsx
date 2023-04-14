import React from 'react'
import Header from "../../common/Header/Header"
import LandinIntro from '../LandingIntro/LandinIntro'
import PdfDesc from '../PdfDesc/PdfDesc'
import AIDesc from '../AIDesc/AIDesc'
import FileDesc from '../FileDesc/FileDesc'
import ImageDesc from '../ImageDesc/ImageDesc'
import Footer from '../../common/Footer/Footer'
const LandingPage = () => {
  return (
    <div className='main-section'>
      <Header/>
      <div className='section'>

      <LandinIntro/>
      <AIDesc/>
      <PdfDesc/>
      
      <FileDesc/>
      <ImageDesc/>
     <Footer/>
     
      </div>
      
    </div>
  )
}

export default LandingPage
