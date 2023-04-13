import React, { useState, useEffect } from "react";
import './App.css';
import LandingPage from './components/HomePage/LandingPage/LandingPage';
function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      setLoading(false);
    };
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader">
          <h2>Loading...</h2>
        </div>
      ) : (
        <div className="App">
    <LandingPage/>
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
