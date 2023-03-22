import React from "react";
import ArtistCards from "./ArtistCards";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PhoneIcon from "@mui/icons-material/Phone";
import RoomIcon from "@mui/icons-material/Room";
import EmailIcon from "@mui/icons-material/Email";

const Home = () => {
  // OVERALL PLANS: Compress contact info into background(fixed cont); Add in artist cards w/ links to individual socials(fixed, adding email / contact info);
  // add in contact section on bottom (will add in under about sect.); add in footer (done);
  // finish backend for email configs(may not need backend, will add contact form however); Finish any remaining detailing
  return (
    <>
      <div className="Home">
        <div className="img-info">
          <img
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
                  <RoomIcon sx={{ fontSize: "default" }} className="icon" />
                  727 17th Ave <br /> Belmar, NJ 07719
                </a>
              </h5>
            </div>
            <div className="info-obj">
              <h5>
                <a href="tel:7322801238">
                  <PhoneIcon sx={{ fontSize: "default" }} className="icon" />
                  732-280-1238
                </a>

                <a href="mailto:blankemail.com">
                  {" "}
                  <EmailIcon style={{ fontSize: "default" }} />
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
      </div>
    </>
  );
};

// Include: NavBar, logo, 4 Options: Appointment maker, address, number and email, times open --> into artists --> about --> contact form --> bottom header with socials

export default Home;
