import React from 'react'
import "./Pdf_Home.css"
import Navbar from "../Nabvar/Navbar"
// import "./main.js"
// import  "./particles.js"
// import "./particlesjs-config.json"
// import Footer from '../Footer/Footer'
const Pdf_Home = () => {

  

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



  return (
  
    <div>
        <Navbar/>
<div id = "particle-js"> 
<div className='banner'>
<h1>Every tool you need to work with PDFs in one place</h1>

</div>


        <div className='tools'>
      <section className="basic-grid">
     {row}
     </section>
    </div>
    {/* <Footer/> */}
    </div>

    {/* <script src="particles.js"></script>
    <script src="main.js"></script> */}
    </div>
  

  )
}

export default Pdf_Home
