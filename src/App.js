import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Navbar from "./components/navBar/navbar";
import SignUp from "./components/accounts/sign-up";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/sign-up" element={<SignUp />} />
        {/* <Route path="*" element={<NotFound />} />{" "} */}
        {/* Catch-all for unknown routes */}
      </Routes>
    </div>
  );
}

export default App;
