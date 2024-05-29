import React, { useState } from "react";
import axios from "axios";

const MyComponent = () => {
  const [message, setMessage] = useState("Loading...");

  // Function to fetch data
  const fetchData = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("tok");
    if (token) {
      try {
        const response = await axios.post(
          "http://localhost:3008/signup",
          { token },
          { withCredentials: true }
        );
        if (response.data.message === "verification successful") {
          setMessage("Verification successful");
        } else {
          setMessage(response.data.message);
        }
      } catch (error) {
        console.error(error);
        setMessage("Failed to process token.");
      }
    } else {
      setMessage("No token found in the URL.");
    }
  };

  // Setting up window.onload to run fetchData once
  if (typeof window !== "undefined" && !window.fetchDataLoaded) {
    window.onload = () => {
      fetchData();
      window.fetchDataLoaded = true; // Ensure it only runs once
    };
  }

  return <div>{message}</div>;
};

export default MyComponent;
