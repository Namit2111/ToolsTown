import React, { useState, useEffect } from "react";
import './App.css';
import LandingPage from './components/HomePage/LandingPage/LandingPage';
function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500)
  }, [])

  return (
    <div>
      {loading === false? (
          
         <div className="App">
         <LandingPage/>
          </div>
        
      ) : (
        <div className="loader">
        <h2>Loading...</h2>
      </div>
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
