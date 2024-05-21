import React from 'react'
import "./payment.css"
import checkSvg from '../../assets/check-svgrepo-com.svg'

const Payment = () => {
  return (
    <div className='paymentContain'>
      
      <div className="paymentBox">
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
      </div>
      
      <div className="paymentBox middle">
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
      </div>
      
      <div className="paymentBox">
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
      </div>
    </div>
  )
}

export default Payment
