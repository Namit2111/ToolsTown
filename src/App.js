import React, { useState, useEffect } from "react";
import './App.css';
import LandingPage from './components/HomePage/LandingPage/LandingPage';
function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      const l = document.getElementsByClassName('AIImage').addEventListener('load')
      console.log(l)
      if(l){setLoading(false);}
      
    };
  }, []);

  return (
    <div>
      {loading ? (
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
