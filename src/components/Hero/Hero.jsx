import React from 'react'
import "./hero.css"
function Hero() {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
            <div className="hero-right">
             <div className="image-container">
                <img src="/client/public/hero-image.png" alt="" />
             </div>
            </div>

            <div className="flexCenter hero-left">

            </div>
        </div>
    </section>
  )
}

export default Hero