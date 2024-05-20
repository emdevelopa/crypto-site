import React from 'react'
import "./homeComp.css"
import pic from "../../assets/pic1.jpg"

const HomeComp1 = () => {
  return (
    <div className='HomeComp'>
      <button className="affiliate">Become an Affiliate</button>
      <h2>We Make <br />Trading Simple</h2>
      <p>Meet the new standard for trading education <br />Guided mentorship, online courses, and live classes</p>
      <button className="start">Get Started</button>
      <img className="pic" src={pic} alt="" />
    </div>
  )
}

export default HomeComp1
