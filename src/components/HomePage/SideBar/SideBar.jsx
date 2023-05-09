import { React, useEffect } from 'react'
import "./SideBar.css"
// import { withRouter } from 'react-router-dom';
const SideBar = () => {

  const handleClick = (event) => {

    event.preventDefault();
  
    document.getElementById(event.target.href.split("#")[1]).scrollIntoView(true);
    
  };




  useEffect(() => {


    function callbackFunc(entries, observer) {


      entries.forEach(entry => {
        // var txt = entry.target.id + " visibility: " + entry.isIntersecting;
        if (entry.isIntersecting) {


          if (entry.target.id === "LIh") {
            document.getElementById("1").style.backgroundColor = "rgb(255,255,255)";
            document.getElementById("2").style.backgroundColor = "rgb(255 255 255 / 31%)";
            document.getElementById("3").style.backgroundColor = "rgb(255 255 255 / 31%)";
            document.getElementById("4").style.backgroundColor = "rgb(255 255 255 / 31%)";
            document.getElementById("5").style.backgroundColor = "rgb(255 255 255 / 31%)";
            document.getElementById("6").style.backgroundColor = "rgb(255 255 255 / 31%)";

          }

          else if (entry.target.id === "aip") {
            document.getElementById("1").style.backgroundColor = "rgb(255 255 255 / 31%)";
            document.getElementById("2").style.backgroundColor = "rgb(255,255,255)";
            document.getElementById("3").style.backgroundColor = "rgb(255 255 255 / 31%)";
            document.getElementById("4").style.backgroundColor = "rgb(255 255 255 / 31%)";
            document.getElementById("5").style.backgroundColor = "rgb(255 255 255 / 31%)";
            document.getElementById("6").style.backgroundColor = "rgb(255 255 255 / 31%)";

          }
          else if (entry.target.id === "pdfp") {
            document.getElementById("1").style.backgroundColor = "rgb(255 255 255 / 31%)";
            document.getElementById("2").style.backgroundColor = "rgb(255 255 255 / 31%)";
            document.getElementById("3").style.backgroundColor = "rgb(255,255,255)";
            document.getElementById("4").style.backgroundColor = "rgb(255 255 255 / 31%)";
            document.getElementById("5").style.backgroundColor = "rgb(255 255 255 / 31%)";
            document.getElementById("6").style.backgroundColor = "rgb(255 255 255 / 31%)";

          }
          else if (entry.target.id === "filep") {
            document.getElementById("1").style.backgroundColor = "rgb(255 255 255 / 31%)";
            document.getElementById("2").style.backgroundColor = "rgb(255 255 255 / 31%)";
            document.getElementById("3").style.backgroundColor = "rgb(255 255 255 / 31%)";
            document.getElementById("4").style.backgroundColor = "rgb(255,255,255)";
            document.getElementById("5").style.backgroundColor = "rgb(255 255 255 / 31%)";
            document.getElementById("6").style.backgroundColor = "rgb(255 255 255 / 31%)";
          }
          else if (entry.target.id === "imgp") {
            document.getElementById("1").style.backgroundColor = "rgb(255 255 255 / 31%)";
            document.getElementById("2").style.backgroundColor = "rgb(255 255 255 / 31%)";
            document.getElementById("3").style.backgroundColor = "rgb(255 255 255 / 31%)";
            document.getElementById("4").style.backgroundColor = "rgb(255 255 255 / 31%)";
            document.getElementById("5").style.backgroundColor = "rgb(255,255,255)";
            document.getElementById("6").style.backgroundColor = "rgb(255 255 255 / 31%)";
          }
          else {
            document.getElementById("1").style.backgroundColor = "rgb(255 255 255 / 31%)";
            document.getElementById("2").style.backgroundColor = "rgb(255 255 255 / 31%)";
            document.getElementById("3").style.backgroundColor = "rgb(255 255 255 / 31%)";
            document.getElementById("4").style.backgroundColor = "rgb(255 255 255 / 31%)";
            document.getElementById("5").style.backgroundColor = "rgb(255 255 255 / 31%)";
            document.getElementById("6").style.backgroundColor = "rgb(255,255,255)";
            window.history.back()

          }


        }

        // document.getElementById('log').appendChild(document.createTextNode(a));
      }
        // document.getElementById('log').appendChild(document.createTextNode(txt));
        // document.getElementById('log').appendChild(document.createElement("br"));
      );
    }





    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    if (document.getElementById("footer") === null) { }
    else {
      let observer = new IntersectionObserver(callbackFunc, options);

      observer.observe(document.getElementById('LIh'));

      observer.observe(document.getElementById('aip'));
      observer.observe(document.getElementById('pdfp'));
      observer.observe(document.getElementById('filep'));
      observer.observe(document.getElementById('imgp'));
      observer.observe(document.getElementById('footer'));

    }









  }, []);





  return (
    <div className="bar-wrapper">
      <div class="bar">
        <ul>
          <li id="1">

           
              <a href="#LIh" onClick={handleClick}>
                <span></span>
              </a>
          


          </li>
          <li id="2">
            <a href="#aip" onClick={handleClick}>
              <span></span>
            </a>
          </li>
          <li id="3">
            <a href="#pdfp" onClick={handleClick}>
              <span></span>
            </a>
          </li>
          <li id="4">
            <a href="#filep" onClick={handleClick}>
              <span></span>
            </a>
          </li>
          <li id="5">
            <a href="#imgp" onClick={handleClick}>
              <span></span>
            </a>
          </li>
          <li id="6">
            <a href="#footer" onClick={handleClick}>
              <span></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar


































