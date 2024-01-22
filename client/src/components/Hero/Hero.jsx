import React from 'react'
import {Link} from 'react-router-dom'
import "./Hero.css"
const Hero = () => {
  return (
    <>
      <section className="section-hero">
        <div className="hero">
        
          <div className="hero-text-box">
            <h1 className="heading-primary">
              Innovate to Motivate – Welcome to Robotics Club -AEC
            </h1>
            <p className="hero-description">
            The Robotics Club of Assam Engineering College provides a platform for students to exhibit their skills and talents in the field of robotics.
            </p>
            <Link to="/about" className="btn btn--fill margin-right-btn">
              Learn more
            </Link>
            <Link  to="/contact" className="btn btn--outline margin-right-btn">
              Contact Us ↓
            </Link>
          </div>
          <div className="hero-img-box">
            <img
              src="images/robo2.png"
              className="hero-img"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero