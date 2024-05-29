import React, { useRef, useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import shortLogo from "../../assets/symbol_white.svg";
import "./signInOut.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const form = useRef();

  const formRef = form.current;

  const addTokenToForm = (form, token) => {
    let tokenInput = form.querySelector('input[name="token"]');
    if (!tokenInput) {
      tokenInput = document.createElement("input");
      tokenInput.type = "hidden";
      tokenInput.name = "token";
      form.appendChild(tokenInput);
    }
    tokenInput.value = token;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:3008/send-registration-link",
        {
          email,
          password,
        },
        {
          withCredentials: true, // This ensures cookies and other credentials are sent with the request
        }
      );
      if (response.ok) {
        console.log(response);

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
      console.log(err);
      setError("Sign-up failed");
    }
  };

  return (
    <div className="signBox">
      <img src={shortLogo} alt="" className="signLogo" />
      <h4 className="signTopic">Log in to Prime</h4>
      <form ref={form} onSubmit={handleSignUp}>
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
          <a href="register" className="signSpan">
            Register
          </a>
        </span>
      </form>
    </div>
  );
};

export default SignIn;
