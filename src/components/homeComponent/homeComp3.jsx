import React from "react";
import "./homeComp.css";
import pic from "../../assets/image00.png";

const HomeComp3 = () => {
  return (
    <div className="HomeComp">
      <h2 className="text-[4em] max-md-[400px]:text-[3em]">
        Daily Trades
        <br />
        and Insights
      </h2>
      <img
        className="w-[70%] h-[50em] my-[30px] max-md-[400px]:h-[28em] max-md-[400px]:w-full"
        src={pic}
        alt=""
      />
      <p>
        Every morning, we provide analysis and
        <br />
        trade ideas in an easily digestible format,
        <br />
        ensuring you know exactly when and where
        <br />
        to trade.
      </p>
    </div>
  );
};

export default HomeComp3;
