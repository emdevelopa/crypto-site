import React, { useState } from "react";
import axios from "axios";
// import emailjs from "@emailjs/browser";
import shortLogo from "../../assets/traderAY.jpeg";
import "./signInOut.css";
import { useNavigate } from "react-router-dom";
import { ThreeDot } from "react-loading-indicators";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  // const form = useRef();
  const navigate = useNavigate();

  const logintoDashboard = (id) => {
    navigate(`/dashboard?tok=${id}`);
  };

  // const formRef = form.current;

  // const addTokenToForm = (form, token) => {
  //   let tokenInput = form.querySelector('input[name="token"]');
  //   if (!tokenInput) {
  //     tokenInput = document.createElement("input");
  //     tokenInput.type = "hidden";
  //     tokenInput.name = "token";
  //     form.appendChild(tokenInput);
  //   }
  //   tokenInput.value = token;
  // };

  const handleSignUp = async (e) => {
    e.preventDefault();
    // if (password !== confirmPassword) {
    //   setError("Passwords do not match");
    //   return;
    // }
    try {
      setLoading(true);
      const response = await axios.post(
        "https://server-theta-pink.vercel.app/login",
        // "http://localhost:3008/login",
        {
          email,
          password,
        },
        {
          withCredentials: true, // This ensures cookies and other credentials are sent with the request
        }
      );
      if (response.status === 200) {
        console.log(response);
        logintoDashboard(response.data.id);
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

      setMsg(response.data.msg);
      // handle success (e.g., redirect to login page or show a success message)
    } catch (err) {
      console.log(err.response?.data.message);
      setError(err.response?.data.message);
    } finally {
      setLoading(false);
      console.log("loading completed");
    }
  };

  return (
    <div className="signBox">
      {loading ? (
        <div className="absolute bg-[#000000e1] top-0 bottom-0 left-0 right-0 flex justify-center items-center">
          <ThreeDot
            variant="brick-stack"
            color="#32cd32"
            size="large"
            text="loging in"
            textColor="white"
          />
        </div>
      ) : (
        ""
      )}
      <img src={shortLogo} alt="" className="signLog h-[4em]" />
      <h4 className="signTopic">Log in to TraderAY</h4>
      <form onSubmit={handleSignUp}>
        {error && <p className="text-red-500">{error}</p>}
        {msg && <p className="text-green-600">{msg}</p>}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="user_email"
          placeholder="Enter your email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />

        <button type="submit">Sign In</button>
        <span className="signSpan">
          Don't have an account yet?{" "}
          <a href="register" className="signSan" style={{ color: "#3fa5ff" }}>
            Register
          </a>
        </span>
      </form>
    </div>
  );
};

export default SignIn;
