import React, { useRef, useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import shortLogo from "../../assets/symbol_white.svg";
import "./signInOut.css";
import { ThreeDot } from "react-loading-indicators";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
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

  const clearMessages = (msg) => {
    setTimeout(() => {
      if (msg === "success") {
        setMsg("");
      } else {
        setError("");
      }
    }, 8000);
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      clearMessages("error");
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post(
        "https://server-theta-pink.vercel.app/send-registration-link",
        // "http://localhost:3008/send-registration-link",
        {
          email,
          password,
        },
        {
          withCredentials: true, // This ensures cookies and other credentials are sent with the request
        }
      );
      console.log(response);
      if (response.status === 200) {
        addTokenToForm(formRef, response.data.token);

        emailjs
          .sendForm("service_xdedwab", "template_ay7g99m", formRef, {
            publicKey: "AcBnCP-k-O6JagINR",
          })
          .then(
            (response) => {
              setMsg("verification link sent to Email");
              clearMessages("success");
              setLoading(false);

              console.log("SUCCESS!", response);
            },
            (error) => {
              console.log("FAILED...", error.text);
            }
          );
      }
      // console.log(response);
      // const token = response.data.token;
      // localStorage.setItem("token", token);

      // console.log(response.data.msg);
      // handle success (e.g., redirect to login page or show a success message)
    } catch (err) {
      console.log(err);
      setError(err?.response.data.message);
      clearMessages("error");

      // setError("Sign-up failed");
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
            text="please wait"
            textColor="white"
          />
        </div>
      ) : (
        ""
      )}
      <img src={shortLogo} alt="" className="signLogo" />
      <h4 className="signTopic">Create your Prime account</h4>
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
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm your password"
          required
        />
        <button type="submit">Sign Up</button>
        <span className="signSpan">
          Already have an account yet?{" "}
          <a href="login" className="signSpan" style={{ color: "#3fa5ff" }}>
            login here
          </a>
        </span>
      </form>
    </div>
  );
};

export default SignUp;
