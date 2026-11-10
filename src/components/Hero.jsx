import React from 'react'
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"

function Hero() {
  return (
    <div className="hero">
        <img src={img1} alt="" width="350px" />
        <img src={img2}  alt="" width="300px" height="250px" />
        <img src={img3}  alt="" width="350px"/>
    </div>
  )
}

export default Hero