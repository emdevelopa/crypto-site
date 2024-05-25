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
      console.log(response);
      if (response.status === 200) {
        addTokenToForm(formRef, response.data.token);

        emailjs
          .sendForm("service_xdedwab", "template_ay7g99m", formRef, {
            publicKey: "AcBnCP-k-O6JagINR",
          })
          .then(
            (response) => {
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

      setMsg(response.data.msg);
      // handle success (e.g., redirect to login page or show a success message)
    } catch (err) {
      console.log(err);
      setError("Sign-up failed");
    } finally {
      console.log("loading completed");
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
        <p className="mt-1">
          Already have an account yet?{" "}
          <a href="sign-in" className="text-blue-800 underline">
            login here
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
