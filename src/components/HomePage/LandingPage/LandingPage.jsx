import React, { useEffect } from 'react'
import Header from "../../common/Header/Header"
import LandinIntro from '../LandingIntro/LandinIntro'
import Footer from '../../common/Footer/Footer'
import SideBar from '../SideBar/SideBar'
import DesDesc from '../../common/Desc_sec/Desc_sec'

const LandingPage = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='main-section'>
      <Header/>
      <div className='section'>
      <SideBar/>

      <LandinIntro/>
      <DesDesc imagePath="PdfTools.png"
      description="All variety of tools to implement on PDF"
      link="/Pdf"
      backgroundColor="transparent linear-gradient(61deg, #8805cd 0%, #b3143e 45%, #8805cd 100%) 0% 0% no-repeat padding-box"
      locator="PDF"
      />
        <DesDesc imagePath="AiTools.png"
      description="All variety of AI tools to make your work easy"
      link="/ai"
      backgroundColor="linear-gradient( 0deg, #383ab5 10%, #5f62d5 29%, #4226ab 60%)"
      locator="AI"
      />
   
   <DesDesc imagePath="FileTools.png"
      description="All variety of File tools to make your work easy"
      link="/Docs"
      backgroundColor="transparent linear-gradient(258deg, #50FF48 0%, #50FF48 0%, #015B7E 100%) 0% 0% no-repeat padding-box"
      locator = "DOCS"
      />
   
   <DesDesc imagePath="ImageTools.png"
      description="All variety of Image tools to make your work easy"
      link="/Image"
      backgroundColor="transparent linear-gradient(61deg, #1B1B6F 0%, #285BC5 45%, #3BCFF0 100%) 0% 0% no-repeat padding-box"
      locator = "IMG"
      />
      {/* <AIDesc/>
      <PdfDesc/>
      
      <FileDesc/>
      <ImageDesc/> */}
     <Footer/>
   
      </div>
      
    </div>
  )
}

export default LandingPage
