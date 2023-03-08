import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ArtistCards from "./ArtistCards";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { orange } from "@mui/material/colors";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PhoneIcon from "@mui/icons-material/Phone";
import RoomIcon from "@mui/icons-material/Room";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";

const color = orange[100];

const Home = () => {
  // OVERALL PLANS: Compress contact info into background; Add in artist cards w/ links to individual socials; add in contact section on bottom; add in footer;
  // finish backend for email configs; Finish any remaining detailing
  return (
    <>
      <div className="Home">
        <div className="img-info">
          <img
            src="https://scontent-iad3-1.xx.fbcdn.net/v/t31.18172-8/892878_493515560713623_1988307624_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=wgUY3TtBPpIAX9NE7ma&_nc_ht=scontent-iad3-1.xx&oh=00_AfBglvruNvtIkXkTt-tn2NGE-rQN7IkU3no64iV9JPEYyw&oe=640E4A2F"
            alt="Fast Times Tattoo"
            width="100%"
            height="100%"
            className="home-bg"
          />

          <div className="info-row">
            <div className="info-obj">
              <h5>
                <a
                  href="https://www.google.com/maps/place/Fast+Times+Tattoo/@40.1730729,-74.0318747,17z/data=!3m1!4b1!4m6!3m5!1s0x89c227fd8642a003:0xd25dd79794c88956!8m2!3d40.1730729!4d-74.029686!16s%2Fg%2F11b5wrwkl1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RoomIcon sx={{ fontSize: 30 }} />
                  727 17th Ave <br /> Belmar, NJ 07719
                </a>
              </h5>
            </div>
            <div className="info-obj">
              <h5>
                <a href="tel:7322801238">
                  <PhoneIcon sx={{ fontSize: 30 }} />
                  732-280-1238
                </a>

                <a href="mailto:blankemail.com">
                  {" "}
                  <EmailIcon sx={{ fontSize: 30 }} />
                  *Email Placeholder*
                </a>
                <br />
              </h5>
            </div>

            <div className="info-obj">
              <h5>
                <a
                  href="https://www.google.com/maps/place/Fast+Times+Tattoo/@40.1730729,-74.0318747,17z/data=!3m1!4b1!4m6!3m5!1s0x89c227fd8642a003:0xd25dd79794c88956!8m2!3d40.1730729!4d-74.029686!16s%2Fg%2F11b5wrwkl1"
                  rel="noreferrer"
                >
                  <CalendarMonthIcon sx={{ fontSize: 30 }} />
                  Mon-Sun 1pm - 8pm
                  <br />
                  Sun 12pm - 5pm
                </a>
              </h5>
            </div>
          </div>
        </div>

        <ArtistCards />

        <div className="about">
          <img src="static/fasttimestattoologo.jpg" className="about-logo" />
          <h1> ABOUT FAST TIMES TATTOO </h1>
          <h2> Text Placeholder</h2>
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
    </>
  );
};

// Include: NavBar, logo, 4 Options: Appointment maker, address, number and email, times open --> into artists --> about --> contact form --> bottom header with socials

export default Home;
