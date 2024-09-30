import React, { useEffect, useState, useRef } from "react";
import "./dashboard.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Payment from "../payment/payment";
import emailjs from "@emailjs/browser";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Dashboard = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isAuthorize, setIsAuthorize] = useState(false);
  const [email, setEmail] = useState("loading...");
  const [subscription, setSubscription] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [txid, setTxid] = useState("");
  const [error, setError] = useState("");
  const formRef = useRef();
  const navigate = useNavigate();

  const query = useQuery();
  const tok = query.get("tok");

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const toggleAuthorize = () => {
    setIsAuthorize(!isAuthorize);
  };

  const signOut = () => {
    navigate("/login");
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText("0x123456789abcdef123456789abcdef123456789a");
    alert("Address copied to clipboard!");
  };

  const handlePaymentClick = () => {
    if (!txid) {
      setError("Transaction ID (TXID) cannot be empty");
    } else {
      console.log("Payment confirmed with TXID:", txid);

      emailjs
        .sendForm("service_xdedwab", "template_uejuj3o", formRef.current, {
          publicKey: "r0vWcKkL53vCwfcvQ",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            setSuccessMsg("An Email will be send to you shortly.");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
      setError("");
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3008/getDetails",
        // "https://server-theta-pink.vercel.app/getDetails",
        { tok },
        { withCredentials: true }
      );
      if (response.status === 200) {
        setEmail(response.data.userInfo.email);
        setSubscription(response.data.userInfo.subscription);
      }
    } catch (err) {
      console.log(err.response?.data.message);
    } finally {
      console.log("loading completed");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isPopupVisible ? (
        <div className="absolute top-0 left-0 bottom-0 right-0 h-screen overflow-y-scroll bg-[#00000095] z-10">
          <Payment
            cancleBtn={true}
            isPopupVisible
            authorize={toggleAuthorize}
            closePopUp={togglePopup}
          />
          {isAuthorize && (
            <div className="cryptoInfo overflow-y-scrol text-white absolute top-0 flex justify-center w-full h-screen">
              <div className="bg-[#000000] w-fit flex items-center flex-col justify-center p-4">
                <h2 className="">Crypto Details</h2>
                <p className="">Kindly make your transaction to the below</p>
                <div className="">
                  <label className="font-bold text-[#00a6ff]">
                    Recipient Address:
                  </label>
                  <p className="">0x123456789abcdef123456789abcdef123456789a</p>
                  <button
                    className="bg-white text-black rounded-md px-1"
                    onClick={handleCopyAddress}
                  >
                    Copy Address
                  </button>
                  <br />
                  <br />
                  <label className="font-bold text-[#00a6ff]">Network:</label>
                  <p className="">TRC20</p>
                </div>

                <form ref={formRef}>
                  <input
                    type="text"
                    name="txid"
                    placeholder="Enter your Transaction ID (TXID)"
                    className="bg-[#7e7e7e32] w-full p-2"
                    value={txid}
                    onChange={(e) => setTxid(e.target.value)}
                  />
                  <input type="hidden" name="to_email" value={email} />
                </form>
                {error && <p className="text-red-500">{error}</p>}
                {successMsg && <p className="text-green-500">Payment Confirmation Processing...<br/> {successMsg}</p>}
                <button
                  className="bg-[#fc931a] p-2 rounded-lg mt-3"
                  onClick={handlePaymentClick}
                >
                  I have paid
                </button>
                <button onClick={toggleAuthorize} className="closeBtn">
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        ""
      )}
      <div className="dashBox">
        <h1 className="topTxt">Dashboard</h1>
        <div className="profileBox">
          <button className="logout" onClick={signOut}>
            Logout
          </button>

          <div className="w-[8em] h-[8em] rounded bg-black flex items-center justify-center">
            <h1 className="text-orange-500 font-bold text-[75px]">
              {email.slice(0, 1).toUpperCase()}
            </h1>
          </div>
          <div className="userInfo">
            <p className="prelude">Hi,</p>
            <h2 className="userName">{email}</h2>

            <p className="subInfo">
              Click the subscribe button to subscribe to discord server.
            </p>
            <div className="profileBtnBox">
              {!subscription ? (
                <button onClick={togglePopup} className="subBtn">
                  Subscribe
                </button>
              ) : (
                <button
                  className="serverBtn"
                  onClick={() =>
                    (window.location.href = "https://discord.gg/JsVyFzYW")
                  }
                >
                  Got to server
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
