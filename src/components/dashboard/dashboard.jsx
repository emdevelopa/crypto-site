import React, { useEffect, useState } from "react";
import "./dashboard.css";
import UserPic from "../../assets/user.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Payment from "../payment/payment";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Dashboard = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isAuthorize, setIsAuthorize] = useState(false);
  const [email, setEmail] = useState("loading...");
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

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://server-theta-pink.vercel.app/getDetails",
        // "http://localhost:3008/getDetails",
        {
          tok,
        },
        {
          withCredentials: true, // This ensures cookies and other credentials are sent with the request
        }
      );
      if (response.status === 200) {
        console.log(response);
        setEmail(response.data.userInfo.email);
        // logintoDashboard(response.data.id);
        // addTokenToForm(formRef, token);

        // emailjs
        //   .sendForm("service_xdedwab", "template_ay7g99m", formRef, {
        //     publicKey: "AcBnCP-k-O6JagINR",
        //   })
        //   .then(
        //     () => {
        //       console.log("SUCCESS!");
        //     },
        //     (error) => {
        //       console.log("FAILED...", error.text);
        //     }
        //   );
      }
      // console.log(response);
      // const token = response.data.token;
      // localStorage.setItem("token", token);

      // setMsg(response.data.msg);
      // handle success (e.g., redirect to login page or show a success message)
    } catch (err) {
      console.log(err.response?.data.message);
      // setError(err.response?.data.message);
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
            <div className="cryptoInfo overflow-y-scrol text-white absolute top-0  flex justify-center w-full h-screen ">
              <div className="bg-[#000000] w-fit flex items-center  flex-col justify-center">
                <h2 className="">Crypto Details</h2>
                <p className="">Kindly make your transaction to the below</p>
                <div className="">
                  <label className="font-bold text-[#00a6ff]">
                    Recipient Address:
                  </label>
                  <p className="">0x123456789abcdef123456789abcdef123456789a</p>
                  <button className="bg-white text-black rounded-md px-1">copy address</button><br /><br />
                  <label className="font-bold text-[#00a6ff]">Network:</label>
                  <p className="">ERC20</p>
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
          {/* <img src={UserPic} alt="" /> */}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
