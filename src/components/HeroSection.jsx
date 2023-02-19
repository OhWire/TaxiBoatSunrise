import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'
import backgroundVideo from "./videos/River.mp4"
import Booking from './Booking'


const HeroSection = () => {
  return (
    <div className='hero-container'>
      <h1>BOOK A <span className="gradient">TOUR</span> NOW</h1>
      <p>Caminha to Tui and back!</p>
        <video src={backgroundVideo} autoPlay muted loop/>
          <Booking/>
        <div className="hero-btns">
            <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>BOOK NOW</Button>
            <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>WATCH VIDEOS <i className='far fa-play-circle' /></Button>
        </div>
    </div>
  )
}

export default HeroSection