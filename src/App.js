import React, { useState, useEffect } from "react";
import './App.css';
import LandingPage from './components/HomePage/LandingPage/LandingPage';
import Loader from "./components/LoadingScreen/WebsiteLoader/Loader";
function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <div>
      {loading === false? (
          
         <div className="App">
         <LandingPage/>
          </div>
        
      ) : (
        <Loader/>
      )}
    </div>
  );


  // return (
  //   <div className="App">
  //   <LandingPage/>
  //    </div>
  // );
}

export default App;
