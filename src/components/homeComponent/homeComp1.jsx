import React from 'react'
import "./homeComp.css"
import pic from "../../assets/image3.png"

const HomeComp1 = () => {
  return (
    <div className="HomeComp" >
      <button className="affiliate">Become an Affiliate</button>
      <h2 className="text-[4em] max-md-[400px]:text-[3em]">
        We Make <br />
        Trading Simple
      </h2>
      <p>
        Meet the new standard for trading education <br />
        Guided mentorship, online courses, and live classes
      </p>
      <a href='/register' className="start">Get Started</a>
      <img
        className="w-[70%] h-[50em] my-[30px] max-md-[400px]:h-[28em] max-md-[400px]:w-full"
        src={pic}
        alt=""
      />
    </div>
  );
}

export default HomeComp1
