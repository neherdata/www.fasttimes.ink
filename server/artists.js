const express = require("express");
const app = express.Router();
const { Artist } = require("./db");

app.use(express.json());

app.get("/", async (req, res, next) => {
  try {
    const artists = await Artist.findAll();
    res.send(artists);
  } catch (ex) {
    next(ex);
  }
});

app.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await Artist.create(req.body));
  } catch (ex) {
    next(ex);
  }
});

app.get("/:id", async (req, res, next) => {
  try {
    const artist = await Artist.findByPk(req.params.id);
    res.send(artist);
  } catch (ex) {
    next(ex);
  }
});

app.put("/:id", async (req, res, next) => {
  try {
    const artist = await Artist.findByPk(req.params.id);
    res.send(await artist.update(req.body));
  } catch (ex) {
    next(ex);
  }
});

module.exports = app;
