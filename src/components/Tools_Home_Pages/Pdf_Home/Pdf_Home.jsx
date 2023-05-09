import React, { useEffect } from "react";
import "./Pdf_Home.css"
import Page_Footer from "../../common/Page_Footer/Page_Footer";
import Navbar from "../../common/Navbar/Navbar";
// import Pdf_navbar from '../pdf_navabr/

const Pdf_Home = (props) => {

  

  const row = []

  for(let i=0;i<11;i++){
    row.push(
     
        <div class="container">
            <div class="content">
              <h1>Hello</h1>
              <p>This is an amazing card with nice animation</p>
            </div>
          </div>
    
    )
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
  
    <div>
        
       {/* <pdf_navbar/> */}
       {/* <Pdf_navbar/> */}
       <Navbar/>
    <div className='banner'>
    <h1>Every tool you need to work with PDFs in one place</h1>

    </div>


        <div className='tools'>
      <section className="basic-grid">
     {row}
     
     </section>
    </div>
    {/* <Footer/> */}
    <div>
    <Page_Footer/>
    </div>
    
    </div>

  
  

  )
}

export default Pdf_Home
