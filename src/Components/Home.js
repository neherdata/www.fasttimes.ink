import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { orange } from "@mui/material/colors";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const color = orange[100];

export const Home = () => {
  // OVERALL PLANS: Compress contact info into background; Add in artist cards w/ links to individual socials; add in contact section on bottom; add in footer;
  // finish backend for email configs; Finish any remaining detailing
  return (
    <>
      <div className="Home">
        <div>
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
                  <i className="fas fa-map-marker-alt"></i>727 17th Ave
                  <br />
                  Belmar, NJ 07719
                </a>
              </h5>
            </div>
            <div className="info-obj">
              <h5>
                <a href="tel:7322801238">
                  <i className="fa fa-phone mr-3"></i>732-280-1238
                </a>
                <br />
                <a href="mailto:blankemail.com">
                  <i className="fa fa-envelope-o mr-3"></i> *Email Placeholder*
                </a>
                <br />
              </h5>
            </div>
            <div className="info-obj">
              <a
                href="https://www.google.com/maps/place/Fast+Times+Tattoo/@40.1730729,-74.0318747,17z/data=!3m1!4b1!4m6!3m5!1s0x89c227fd8642a003:0xd25dd79794c88956!8m2!3d40.1730729!4d-74.029686!16s%2Fg%2F11b5wrwkl1"
                rel="noreferrer"
              >
                <h5>
                  <i className="fa fa-calendar mr-3"></i>Mon-Sun 1pm - 8pm
                  <br />
                  Sun 12pm - 5pm
                </h5>
              </a>
            </div>
          </div>
        </div>

        <div className="artist-cards">
          <Card
            sx={{ maxWidth: 650, backgroundColor: "#4f4a47" }}
            className="card"
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                width="400"
                image=""
                alt="Jeff Michel"
                sx={{ backgroundColor: "grey" }}
              />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h4" sx={{ color: "#FFDAB9" }}>
                JEFF MICHEL {"     "}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "baseline",
                color: "white",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  "&:hover": {
                    color: "#FFDAB9",
                  },
                }}
              >
                <ArrowRightIcon sx={{ height: 20, width: 20 }} />
                View Work
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  "&:hover": {
                    color: "#FFDAB9",
                  },
                }}
              >
                <ArrowRightIcon sx={{ height: 20, width: 20 }} />
                View Instagram
              </Typography>
              <Button
                className="baa-btn"
                variant="contained"
                size="large"
                href="#contained-buttons"
                sx={{
                  color: "#FFFAF0",
                  backgroundColor: "#FFDAB9",
                  "&:hover": {
                    backgroundColor: "#ffb237",
                  },
                }}
              >
                Book an Appointment
              </Button>
            </CardActions>
          </Card>

          <Card
            sx={{ maxWidth: 650, backgroundColor: "#4f4a47" }}
            className="card"
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                width="400"
                image=""
                alt="Hans Ryan"
                sx={{ backgroundColor: "grey" }}
              />
            </CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                className="artist"
                sx={{ color: "#FFDAB9" }}
              >
                HANS RYAN{"     "}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "baseline",
                color: "white",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  "&:hover": {
                    color: "#FFDAB9",
                  },
                }}
              >
                <ArrowRightIcon sx={{ height: 20, width: 20 }} />
                View Work
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  "&:hover": {
                    color: "#FFDAB9",
                  },
                }}
              >
                <ArrowRightIcon sx={{ height: 20, width: 20 }} />
                View Instagram
              </Typography>
              <Button
                className="baa-btn"
                variant="contained"
                size="large"
                href="#contained-buttons"
                sx={{
                  color: "#FFFAF0",
                  backgroundColor: "#FFDAB9",
                  "&:hover": {
                    backgroundColor: "#ffb237",
                  },
                }}
              >
                Book an Appointment
              </Button>
            </CardActions>
          </Card>

          <Card
            sx={{
              maxWidth: 650,
              backgroundColor: "#4f4a47",
            }}
            className="card"
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                width="400"
                image=""
                alt="Karissa Anne"
                sx={{ backgroundColor: "grey" }}
              />
            </CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                sx={{
                  color: "#FFDAB9",
                }}
              >
                KARISSA ANNE
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "baseline",
                color: "white",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  "&:hover": {
                    color: "#FFDAB9",
                  },
                }}
              >
                <ArrowRightIcon sx={{ height: 20, width: 20 }} />
                View Work
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  "&:hover": {
                    color: "#FFDAB9",
                  },
                }}
              >
                <ArrowRightIcon sx={{ height: 20, width: 20 }} />
                View Instagram
              </Typography>
              <Button
                className="baa-btn"
                variant="contained"
                size="large"
                href="#contained-buttons"
                sx={{
                  color: "#FFFAF0",
                  backgroundColor: "#FFDAB9",
                  "&:hover": {
                    backgroundColor: "#ffd084",
                  },
                }}
              >
                Book an Appointment
              </Button>
            </CardActions>
          </Card>
        </div>

        <div className="about">
          <h1> ABOUT FAST TIMES TATTOO </h1>
          <h2> Text Placeholder</h2>
        </div>
      </div>
      <div className="footer">
        <div className="s"></div>© 2023 Copyright Fast Times Tattoo. All rights
        reserved.
      </div>
    </>
  );
};

// Include: NavBar, logo, 4 Options: Appointment maker, address, number and email, times open --> into artists --> about --> contact form --> bottom header with socials

export default Home;
