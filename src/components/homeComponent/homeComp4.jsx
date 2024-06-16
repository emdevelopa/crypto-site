import React from "react";
import "./homeComp.css";
import pic from "../../assets/4th.png";

const HomeComp4 = () => {
  return (
    <div className="HomeComp">
      <h2 className="text-[4em] max-md-[400px]:text-[3em]">
        Comprehensive
        <br />
        Learning Hub
      </h2>
      <img
        className="w-[70%] h-[50em] my-[30px] max-md-[400px]:h-[28em] max-md-[400px]:w-full"
        src={pic}
        alt=""
      />
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