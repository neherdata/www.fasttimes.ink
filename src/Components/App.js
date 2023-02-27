import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Artists from "./Components/Artists";
import ContactUs from "./Components/Contact";
import Faq from "./Components/Faq";
import Navi from "./Components/Nav";

const App = () => {
  return (
    <div className="App">
      <Navi />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </div>
  );
};

export default App;
