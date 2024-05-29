import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Dashboard from "./components/dashboard/dashboard";
import Forgot from "./components/accounts/forgot";
import Profile from "./components/profile/profile";
import SignIn from "./components/accounts/sign-in";
import SignUp from "./components/accounts/sign-up";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Home route */}
        <Route path="/" element={<Profile />} /> {/* Home route */}
        <Route path="/" element={<Forgot />} /> {/* Home route */}
        <Route path="/login" element={<SignIn />} /> {/* Home route */}
        <Route path="/register" element={<SignUp />} /> {/* Home route */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="*" element={<NotFound />} />{" "} */}
        {/* Catch-all for unknown routes */}
      </Routes>
    </div>
  );
}

export default App;
