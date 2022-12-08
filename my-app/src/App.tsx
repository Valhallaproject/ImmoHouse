import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Acheter from "./pages/acheter"
import Location from "./pages/location"
import Contact from "./pages/contact";
import Agence from "./pages/agence";
import Vendre from "./pages/vendre";
import NousChoisir from "./pages/nousChoisir";
import Estimation from "./pages/estimation";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vendre" element={<Vendre />} />
          <Route path="/acheter" element={<Acheter />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/agence" element={<Agence />} />
          <Route path="/pourquoi-nous-choisir" element={<NousChoisir />} />
          <Route path="/estimez-votre-bien" element={<Estimation />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
