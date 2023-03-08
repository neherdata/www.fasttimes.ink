import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Artists from "./Artists";
import ArtistCards from "./ArtistCards";
import ContactUs from "./Contact";
import Faq from "./Faq";
import Navi from "./Nav";

const App = () => {
  return (
    <div className="App">
      <Navi />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artists/:id" element={<Artists />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </div>
  );
};

export default App;
