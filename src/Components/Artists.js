import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ArtistCards from "./ArtistCards";
import { fetchArtists } from "../store";
import Navi from "./Nav";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";

const Artists = () => {
  const { artists } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArtists());
  }, []);

  return (
    <div className="artist-page-cont">
      <Navi />
      <div className="hdr-artist"></div>
      <div className="artist-card-cont">
        <ArtistCards />
      </div>
      <div className="footer-info">
        <div className="ftr-logos">
          <a href="https://www.google.com/maps/place/Fast+Times+Tattoo/@40.1730729,-74.0318747,17z/data=!3m1!4b1!4m6!3m5!1s0x89c227fd8642a003:0xd25dd79794c88956!8m2!3d40.1730729!4d-74.029686!16s%2Fg%2F11b5wrwkl1">
            <GoogleIcon sx={{ fontSize: 40 }} />{" "}
          </a>
          <a href="https://www.facebook.com/FastTimesBelmar/">
            <FacebookIcon sx={{ fontSize: 40 }} href="" />{" "}
          </a>
          <a href="https://www.instagram.com/fasttimestattoo/?hl=en">
            <InstagramIcon sx={{ fontSize: 40 }} />{" "}
          </a>
        </div>
        <div className="ftr-notes"> WALK-INS WELCOMED</div>
      </div>
      <div className="footer-cr">
        © 2023 Copyright Fast Times Tattoo. All rights reserved.
      </div>
    </div>
  );
};

export default Artists;
