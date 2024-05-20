import React from "react";
import "./homeComp.css";
import pic from "../../assets/footprint.svg";

const HomeComp4 = () => {
  return (
    <div className="HomeComp">
      <h2>
      Comprehensive
        <br />
        Learning Hub
      </h2>
      <img className="pic" src={pic} alt="" />
      <p>
        Learn at your own pace with our online
        <br />
        courses, trading startegies, video
        <br />
        guides
      </p>
    </div>
  );
};

export default HomeComp4;