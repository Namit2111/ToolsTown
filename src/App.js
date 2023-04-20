import React, { useState, useEffect } from "react";
import './App.css';
import LandingPage from './components/HomePage/LandingPage/LandingPage';
import Loader from "./components/LoadingScreen/WebsiteLoader/Loader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pdf from "./components/Tools_Home_Pages/Pdf_Home/Pdf_Home";
import Ai_home from "./components/Tools_Home_Pages/AI_Home/Ai_home";
import Docs_home from "./components/Tools_Home_Pages/Docs_Home/Docs_home";
import Image_home from "./components/Tools_Home_Pages/Image_Home/Image_home";
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
            <Route path="/AI" element={<Ai_home/>}></Route>
            <Route path="/Docs" element={<Docs_home/>}></Route>
            <Route path="/Image" element={<Image_home/>}></Route>

          
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
