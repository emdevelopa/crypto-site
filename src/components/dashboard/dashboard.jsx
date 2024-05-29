import React, { useState } from "react";
import "./dashboard.css";
import UserPic from "../../assets/user.jpg";

const Dashboard = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-left font-bold text-3xl">Dashboard</h1>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75">
            Logout
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <div className="w-16 h-16 rounded-full bg-gray-800 flex justify-center items-center mx-auto mb-4">
            <h1 className="font-bold text-[50px] text-orange-500">O</h1>
          </div>
          <p className="text-gray-700 mb-4">
            Hi olatunbossemma17@gmail.com, welcome to your dashboard
          </p>

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
