import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ArtistCards from "./ArtistCards";
import { fetchArtists } from "../store";
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
      <div className="hdr-artist">
        ARTISTS
        <h1 className="hdr-text">OUR ARTISTS </h1>
        HASV
      </div>

      <div className="artist-card-cont"></div>
    </div>
  );
};

export default Artists;
