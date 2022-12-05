import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import A from "./pages/a"
import Acheter from "./pages/acheter"
import Location from "./pages/location"
import Contact from "./pages/contact";
import Agence from "./pages/agence";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a" element={<A />} />
          <Route path="/acheter" element={<Acheter />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/agence" element={<Agence />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
