import React, { useState, useEffect } from "react";
import './App.css';
import LandingPage from './components/HomePage/LandingPage/LandingPage';
import Loader from "./components/LoadingScreen/WebsiteLoader/Loader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pdf from "./components/PDF_Screen/Pdf_Home/Pdf_Home";
function App() {

  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000)
  }, [])

  return (
    <div>
      {isLoading === false? (
          
         <div className="App">
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage/>}></Route>
            <Route path="/Pdf" element={<Pdf/>}></Route>
          
          </Routes>
          </BrowserRouter>

         {/* <LandingPage/> */}
          </div>
        
      ) : (
        <Loader/>
      )}
    </div>
  );



}

export default App;
