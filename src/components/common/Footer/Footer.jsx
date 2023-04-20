import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='Footer'>
       


       <footer>
        <div class="row">
            <div class="col">
                {/* <img src="logo.png" class="footer_logo"> */}
                <p class="footer_about">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore harum molestias nesciunt, 
                    doloremque magni aspernatur iste blanditiis, fugiat quaerat accusamus ut, vero tempore. 
                    Fugiat, illum!
                </p>
            </div>
            <div class="col">
                <h3>Home<div class="bottom_line"><span></span></div></h3>
                <p>2D 122, Sector 3 ,Madhavpuram</p>
                <p>Meerut City</p>
                <p>Meerut , Uttar Pradesh</p>
                <p class="footer_email">namitjain@gamil.com</p>
                <h4>+91 9548232723</h4>
            </div>
            <div class="col">
                <h3>Links <div class="bottom_line"><span></span></div></h3>
                <ul>
                    <li><a href="/#">HOME</a></li>
                    <li><a href="/#">ABOUT</a></li>
                    <li><a href="/#">SERVICE</a></li>
                    <li><a href="/#">CONTACT US</a></li>
                </ul>
            </div>
            <div class="col">
                <h3>Newsletter <div class="bottom_line"><span></span></div></h3>
                <form>
                    <ion-icon class="icon" name="mail"></ion-icon>
                    <label><input type="email" placeholder="Enter your email" required /></label>
                    <button type="submit"><ion-icon class="icon_right" name="arrow-round-forward"></ion-icon></button>
                </form>
                <div class="social_icons">
                    <ion-icon class="social_icon" name="logo-facebook"></ion-icon>
                    <ion-icon class="social_icon" name="logo-whatsapp"></ion-icon>
                    <ion-icon class="social_icon" name="logo-twitter"></ion-icon>
                    <ion-icon class="social_icon" name="logo-instagram"></ion-icon>
                </div>
            </div>
        </div>
        <hr
        style={{
            color: '#000000',
            backgroundColor:'#000000',
            height: 5
        }}
    />
    
        <p class="copyright">Education Purpose Ⓒ 2023 - All Rights Reserved</p>
     </footer> 











    
        
      </div>
  )
}

export default Footer
