import React from 'react'
import images from '../../Utils/constants/images';
import './Footer.scss'
import { Link } from 'react-router-dom';
import Button from '../Button/Button';


const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-3 col-md-4">
            <img src={images.logo} alt="Logo" className='logo' />
            <div className="social-links">
              <a href="#"><img src={images.facebook} alt="Social Icon" /></a>
              <a href="#"><img src={images.insta} alt="Social Icon" /></a>
              <a href="#"><img src={images.x} alt="Social Icon" /></a>
              <a href="#"><img src={images.linkedin} alt="Social Icon" /></a>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="footer-links">
              <h5>Contact US</h5>
              <Link to="/">Home</Link>
              <Link to="/become-seller">Become a seller</Link>
              <Link to="/">Seller login</Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="footer-links">
              <h5>Contact US</h5>
              <a href="tel:+91 9876543210">+91 9876543210</a>
              <a href="http://www.tazzy.com">www.tazzy.com</a>
              <a href="mailto:tazzy@gmail.com">tazzy@gmail.com</a>
              <p>56, Rajar Golli, Amborkhana, Surat</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-7">
            <div className="footer-links">
              <h5>Get the latest information</h5>
              <div className="footer-input">
                <input type="email" className='form-control' name="email" id="email" placeholder='Enter your location' />
                <Button name='Submit' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
