import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    
<div>
<footer class="footer-distributed bg-dark">

<div class="footer-left">

  <h3>BRONZE<span>Cars</span> <img
              alt=""
              src="https://img.freepik.com/free-vector/red-sports-car-black-background-vector_53876-67367.jpg"
              width="70"
              height="70"
              className="d-inline-block align-top"
              style={{borderRadius:'50%'}}
            /></h3>

  <p class="footer-links">
   <h5>Visit us now!!</h5>
  </p>

  <p class="footer-company-name text-light">Bronze Cars © 2023</p>
</div>

<div class="footer-center">

  <div>
    <i class="fa fa-map-marker"></i>
    <p><span>444 2nd Avenue</span> Cochin-12, Ernakulam</p>
  </div>

  <div>
    <i class="fa fa-phone"></i>
    <p>+91 9876543210</p>
  </div>

  <div>
    <i class="fa fa-envelope"></i>
    <p><a href="mailto:support@company.com">bronzecars@company.com</a></p>
  </div>

</div>

<div class="footer-right">

  <p class="footer-company-about">
    <span class="text-info">About the company</span>
    Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
  </p>

  <div class="footer-icons">

    <a href="#"><i class="fa fa-facebook"></i></a>
    <a href="#"><i class="fa fa-twitter"></i></a>
    <a href="#"><i class="fa fa-whatsapp"></i></a>
    <a href="#"><i class="fa fa-instagram"></i></a>

  </div>

</div>

</footer>
</div>
    
  )
}

export default Footer