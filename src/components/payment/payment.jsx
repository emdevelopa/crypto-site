import React from "react";
import "./payment.css";
import checkSvg from "../../assets/check-svgrepo-com.svg";

const Payment = (props) => {
  return (
    <div className="paymentContain" id="pricing">
      <div className="paymentBox">
        <div className="paymentBoxInner">
          <p>Monthly</p>
          <h2>
            0.00341
            <sub className="text-orange-500 text-[12px] font-bold">BTC</sub> per
            month
          </h2>
          <span className="billed">Billed Monthly</span>

          <span className="paymentInfo">Get started with Monthly</span>
          <span className="paymentInfo">
            <img src={checkSvg} alt="" />
            Analysis & Trade Ideas
          </span>
          <span className="paymentInfo">
            <img src={checkSvg} alt="" />
            Guided Mentorship
          </span>
          <span className="paymentInfo">
            <img src={checkSvg} alt="" />
            Daily Livestreams
          </span>
          <span className="paymentInfo">
            <img src={checkSvg} alt="" />
            Interactive Learning Sessions
          </span>
          <span className="paymentInfo">
            <img src={checkSvg} alt="" />
            Custom Suite of Indicators
          </span>
          <button className="payBtn" onClick={props.authorize}>
            {props.isPopupVisible ? "Authorize" : "Get started"}
          </button>
          {props.cancleBtn ? (
            <h1
              className="mt-4 bg-[#af4545c6] cursor-pointer hover:bg-[#b71919] text-white font-bold py-[0.5em] px-[3em] rounded-lg"
              onClick={props.closePopUp}
            >
              Terminate process
            </h1>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* <div className="paymentBox middle">
        <div className="paymentBoxInner">
            <p>Monthly</p>
            <h2>$125 per month</h2>
            <span className="billed">Billed Monthly</span>

            <span className="paymentInfo">Get started with Monthly</span>
            <span className="paymentInfo"><img src={checkSvg} alt="" />Analysis & Trade Ideas</span>
            <span className="paymentInfo"><img src={checkSvg} alt="" />Guided Mentorship</span>
            <span className="paymentInfo"><img src={checkSvg} alt="" />Daily Livestreams</span>
            <span className="paymentInfo"><img src={checkSvg} alt="" />Interactive Learning Sessions</span>
            <span className="paymentInfo"><img src={checkSvg} alt="" />Custom Suite of Indicators</span>
            <button className="payBtn">Get started</button>
        </div>
      </div> */}

      {/* <div className="paymentBox">
        <div className="paymentBoxInner">
            <p>Monthly</p>
            <h2>$125 per month</h2>
            <span className="billed">Billed Monthly</span>

            <span className="paymentInfo">Get started with Monthly</span>
            <span className="paymentInfo"><img src={checkSvg} alt="" />Analysis & Trade Ideas</span>
            <span className="paymentInfo"><img src={checkSvg} alt="" />Guided Mentorship</span>
            <span className="paymentInfo"><img src={checkSvg} alt="" />Daily Livestreams</span>
            <span className="paymentInfo"><img src={checkSvg} alt="" />Interactive Learning Sessions</span>
            <span className="paymentInfo"><img src={checkSvg} alt="" />Custom Suite of Indicators</span>
            <button className="payBtn">Get started</button>
        </div>
      </div> */}
    </div>
  );
};

export default Payment;
