import React from 'react'
import "./homeComp.css"
import pic from "../../assets/chat.jpg"

const HomeComp2 = () => {
  return (
    <div className='HomeComp'>
      <h2 className='biggerH2'>Unlike any Group<br />you've Joined Before</h2>
      <img className="pic" src={pic} alt="" />
      <p>Experience personalized learning with small<br />classes, one-on-one guideance, daily live <br />stream</p>
    </div>
  )
}

export default HomeComp2
