import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import ArtistCards from "./ArtistCards";
import { fetchArtists } from "../store";

const Artists = () => {
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
