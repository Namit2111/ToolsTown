import React, { useState, useEffect } from "react";
import './App.css';
import LandingPage from './components/HomePage/LandingPage/LandingPage';
import Loader from "./components/LoadingScreen/WebsiteLoader/Loader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pdf from "./components/PDF_Screen/Pdf_Home/Pdf_Home";
function App() {

  // const [isLoading, setLoading] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 1000)
  // }, [])

 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    const handleError = () => {
      setIsLoading(false);
    };

    const images = document.getElementsByTagName("img");

    for (let i = 0; i < images.length; i++) {
      images[i].addEventListener("load", handleLoad);
      images[i].addEventListener("error", handleError);
    }

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);

      for (let i = 0; i < images.length; i++) {
        images[i].removeEventListener("load", handleLoad);
        images[i].removeEventListener("error", handleError);
      }
    };
  }, []);
  return (
    <div>
      {isLoading === false? (
          
         <div className="App">
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage/>}></Route>
            <Route path="Pdf" element={<Pdf/>}></Route>
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
