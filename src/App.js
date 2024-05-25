import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Dashboard from "./components/dashboard/dashboard";
import Forgot from "./components/accounts/forgot";
import Profile from "./components/profile/profile";
import SignIn from "./components/accounts/sign-in";
import SignUp from "./components/accounts/sign-up";
import VerifyUser from "./components/verification/verifyUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/dashboard" element={<Dashboard />} />{" "}
        {/* Dashboard route */}
        <Route path="/profile" element={<Profile />} /> {/* Profile route */}
        <Route path="/forgot" element={<Forgot />} /> {/* Forgot route */}
        <Route path="/sign-in" element={<SignIn />} /> {/* Sign-in route */}
        <Route path="/sign-up" element={<SignUp />} /> {/* Sign-up route */}
        {/* Render VerifyUser component only for "/verify" route */}
        <Route path="/verify" element={<VerifyUser />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="*" element={<NotFound />} />{" "} */}
        {/* Catch-all for unknown routes */}
      </Routes>
    </div>
  );
}

export default App;
