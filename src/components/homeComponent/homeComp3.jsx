import React from "react";
import "./homeComp.css";
import pic from "../../assets/insights.svg";

const HomeComp3 = () => {
  return (
    <div className="HomeComp">
      <h2>
        Daily Trades
        <br />
        and Insights
      </h2>
      <img className="pic" src={pic} alt="" />
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
