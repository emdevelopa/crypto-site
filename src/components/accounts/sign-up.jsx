import React, { useRef, useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const form = useRef();
  

  const handleSignUp = async (e) => {

    emailjs
      .sendForm("service_xdedwab", "template_ay7g99m", form.current, {
        publicKey: "AcBnCP-k-O6JagINR",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:3008/signup",
        {
          email,
          password,
        },
        {
          withCredentials: true, // This ensures cookies and other credentials are sent with the request
        }
      );
      console.log(response);
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
    <div className="flex justify-center items-center h-screen">
      <form
        ref={form}
        onSubmit={handleSignUp}
        className="w-1/3 bg-white p-6 rounded shadow-md"
      >
        <h1 className="text-2xl mb-4">Sign Up</h1>
        {error && <p className="text-red-500">{error}</p>}
        {msg && <p className="text-green-600">{msg}</p>}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            name="user_email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
