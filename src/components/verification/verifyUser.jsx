import React, { useState, useEffect } from "react";
import axios from "axios";
import successful from "../../assets/successful.png";
import failed from "../../assets/failed.png";
import { useLocation } from "react-router-dom";

const Verify = () => {
  const [message, setMessage] = useState("Loading...");
  const [success, setSuccess] = useState(false);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const fetchData = async (token) => {
    if (token) {
      try {
        const response = await axios.post(
          "https://server-theta-pink.vercel.app/signup",
          // "http://localhost:3008/signup",
          { token },
          { withCredentials: true }
        );
        if (response.data.message === "verification successful") {
          setMessage("Verification successful");
          setSuccess(true);
        } else {
          setMessage(response.data.message);
          setSuccess(false);
        }
      } catch (error) {
        console.error(error);
        setMessage("Failed to process token.");
        setSuccess(false);
      }
    } else {
      setMessage("No token found in the URL.");
      setSuccess(false);
    }
  };

  useEffect(() => {
    const urlParams = useQuery();
    const token = urlParams.get("tok");
    fetchData(token);
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="h-[100vh] bg-[#1a1a24] flex flex-col items-center justify-center">
      {success ? (
        <img src={successful} alt="checked" className="w-[4em]" />
      ) : (
        <img src={failed} alt="failed" className="w-[4em]" />
      )}
      <p className="text-white">{message}</p>
    </div>
  );
};

export default Verify;
