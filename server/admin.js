const express = require("express");
const app = express.Router();
const { Artist } = require("./db");
const { isLoggedIn } = require("./middleware");

module.exports = app;

app.post("/", async (req, res, next) => {
  try {
    res.send(await Artist.authenticate(req.body));
  } catch (ex) {
    next(ex);
  }
});

app.post("/register", async (req, res, next) => {
  try {
    const artist = await Artist.create(req.body);
    res.send(artist.generateToken());
  } catch (ex) {
    next(ex);
  }
});

app.get("/", isLoggedIn, (req, res, next) => {
  try {
    res.send(req.artist);
  } catch (ex) {
    next(ex);
  }
});

app.put("/", isLoggedIn, async (req, res, next) => {
  try {
    const artist = req.artist;
    //defines the properties a artist can change
    await artist.update(req.body);
    res.send(artist);
  } catch (ex) {
    next(ex);
  }
});
