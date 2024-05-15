
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/home';
import About from './components/About/about';
import Navbar from "./components/navBar/navbar";

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/about" element={<About />} /> {/* About route */}

        {/* <Route path="*" element={<NotFound />} />{" "} */}
        {/* Catch-all for unknown routes */}
      </Routes>
    </div>
  );
}

export default App;
