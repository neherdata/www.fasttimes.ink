import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Artists from "./Artists";
// import ArtistCards from "./ArtistCards";
import ContactUs from "./Contact";
import Faq from "./Faq";
import Navi from "./Nav";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";

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
      <div className="footer-info">
        <div className="ftr-logos">
          <a href="https://www.google.com/maps/place/Fast+Times+Tattoo/@40.1730729,-74.0318747,17z/data=!3m1!4b1!4m6!3m5!1s0x89c227fd8642a003:0xd25dd79794c88956!8m2!3d40.1730729!4d-74.029686!16s%2Fg%2F11b5wrwkl1">
            <GoogleIcon sx={{ fontSize: 50 }} />{" "}
          </a>
          <a href="https://www.facebook.com/FastTimesBelmar/">
            <FacebookIcon sx={{ fontSize: 50 }} href="" />{" "}
          </a>
          <a href="https://www.instagram.com/fasttimestattoo/?hl=en">
            <InstagramIcon sx={{ fontSize: 50 }} />{" "}
          </a>
        </div>

        <div className="ftr-notes"> WALK-INS WELCOMED </div>
        <div className="footer-cr">
          © 2023 Copyright Fast Times Tattoo. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default App;
