import React, { useState } from "react";
import "./dashboard.css";
import UserPic from "../../assets/user.jpg";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);


  const navigate = useNavigate()

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const signOut=() => {
    navigate("/login")
  }

  return (
    <div className="dashBox">
      <h1 className="topTxt">Dashboard</h1>
      <div className="profileBox">
        <button className="logout" onClick={signOut}>Logout</button>
        {/* <img src={UserPic} alt="" /> */}
        <div className="w-[8em] h-[8em] rounded bg-black flex items-center justify-center">
          <h1 className="text-orange-500 font-bold text-[75px]">O</h1>
        </div>
        <div className="userInfo">
          <p className="prelude">Hi,</p>
          <h2 className="userName">Olatunbossemma17@gmail.com</h2>

          <p className="subInfo">
            Click the subscribe button to subscribe to discord server.
          </p>
          <div className="profileBtnBox">
            <button onClick={togglePopup} className="subBtn">
              Subscribe
            </button>
            <br />
            <button
              className="serverBtn"
              onClick={() =>
                (window.location.href = "https://discord.gg/JsVyFzYW")
              }
            >
              Got to server
            </button>
          </div>
          {isPopupVisible && (
            <div className="cryptoInfo">
              <div className="">
                <h2 className="">Crypto Details</h2>
                <p className="">
                  Kindly make your transaction to the below
                </p>
                <div className="">
                  <label className="">
                    Recipient Address:
                  </label>
                  <p className="">
                    0x123456789abcdef123456789abcdef123456789a
                  </p>
                </div>
                {/* <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Amount:
              </label>
              <p className="bg-gray-200 p-2 rounded">0.5 ETH</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Transaction Fee:
              </label>
              <p className="bg-gray-200 p-2 rounded">0.01 ETH</p>
            </div> */}
                <button
                  onClick={togglePopup}
                  className="closeBtn"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
