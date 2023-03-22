import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import { fetchArtists } from "../store";

const ArtistCards = () => {
  const dispatch = useDispatch();
  const { artists } = useSelector((state) => state);

  // const { artists, admin } = useSelector((state) => state); -- for later admin usage in order to update artists.

  useEffect(() => {
    dispatch(fetchArtists());
  }, []);

  return (
    <div className="artist-container">
      {artists.map((artist) => {
        return (
          <div className="artist-cards">
            <Card
              sx={{ maxWidth: 550, backgroundColor: "#4f4a47" }}
              className="card"
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="550"
                  width="550"
                  image=""
                  alt={artist.name}
                  sx={{ backgroundColor: "grey" }}
                />
              </CardActionArea>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  sx={{ color: "#FFDAB9", textTransform: "uppercase" }}
                >
                  {artist.name}
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
                  <ArrowRightIcon sx={{ height: 30, width: 30 }} />
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
                  <Link to={artist.social} className="link">
                    <ArrowRightIcon sx={{ height: 30, width: 30 }} />
                    View Instagram
                  </Link>
                </Typography>
              </CardActions>
              <CardActions>
                <Button
                  className="baa-btn"
                  variant="contained"
                  size="large"
                  href=""
                  sx={{
                    color: "#FFFAF0",
                    backgroundColor: "#B22222",
                    "&:hover": {
                      backgroundColor: "white",
                    },
                  }}
                >
                  Request Appointment
                </Button>
              </CardActions>
            </Card>
          </div>
        );
      })}{" "}
    </div>
  );
};

export default ArtistCards;
