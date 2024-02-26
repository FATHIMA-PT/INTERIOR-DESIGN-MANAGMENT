import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div>
        
    <footer>
        <div class="footer-content">
            <div class="footer-logo">
                <img src="https://i.pinimg.com/564x/67/f8/0d/67f80dfb909022631a1a1780c4efe870.jpg" alt="" />
                <h6>Interior Harmony</h6>
            </div>


            <div class="footer-address">
                <h6>Contact Us</h6>
                <p>
                    Your Interior Design <br />
                    123 Main Street<br />
                    Cityville, State 12345<br />
                    Country
                </p>
                <p>Email: info@yourinteriordesign.com</p>
                <p>Phone: +1 (123) 456-7890</p>
            </div>



            
            <div class="footer-links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="footer-description">
               <p>"Transform your space with elegance and style at Your Interior Design. Our passion lies in creating timeless and personalized environments that reflect your unique taste and lifestyle. From conceptualization to realization, our team of dedicated professionals is committed to turning your dreams into reality.</p>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer