import React from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './footer.css'


const Footer = () => {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Join the adventure newsletter to receive our best vacation deals
            </p>
            <p className="footer-subscription-text">
                You can unsubscribe at any time.
            </p>
            <div className="input-areas">
                <form action="">
                    <input type="email" name="email" placeholder='Your email' className='footer-input' />
                    <Button buttonStyle='btn--outliune'>Subscribe</Button>
                </form>
            </div>
        </section>
        <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
            <div className="footer-logo">
                <Link to="/" className="social-logo">
                    LOGO <i className="fab fa-typo3"></i>
                </Link>
            </div>
            <small className="website-rights">LOGO C 2020</small>
            <div className="social-icons">
                <Link className="social-icon-link" to="/" target="_blank" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                </Link>
                <Link className="social-icon-link" to="/" target="_blank" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                </Link>
                <Link className="social-icon-link" to="/" target="_blank" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                </Link>
                <Link className="social-icon-link" to="/" target="_blank" aria-label="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                </Link>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Footer