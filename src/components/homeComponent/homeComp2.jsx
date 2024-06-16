import React from 'react'
import "./homeComp.css"
import pic from "../../assets/chat.jpg"

const HomeComp2 = () => {
  return (
    <div className="HomeComp">
      <h2 className="text-[4em] max-md-[400px]:text-[3em]">
        Unlike any Group
        <br />
        you've Joined Before
      </h2>
      <img
        className="w-[70%] h-[50em] my-[30px] max-md-[400px]:h-[28em] max-md-[400px]:w-full"
        src={pic}
        alt=""
      />
      <p>
        Experience personalized learning with small
        <br />
        classes, one-on-one guideance, daily live <br />
        stream
      </p>
    </div>
  );
}

export default HomeComp2
