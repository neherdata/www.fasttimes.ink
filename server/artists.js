const express = require("express");
const app = express.Router();
const { Artist } = require("./db");

app.use(express.json());

app.get("/", async (req, res, next) => {
  Artist.findAll()
    .then((artists) => res.send(artists))
    .catch(next);
});

app.post("/", async (req, res, next) => {
  Artist.create(req.body)
    .then((artist) => res.status(201).send(artist))
    .catch(next);
});

app.get("/:id", async (req, res, next) => {
  Artist.findByPk(req.params.id)
    .then((artist) => res.send(artist))
    .catch(next);
});

app.put("/:id", (req, res, next) => {
  Artist.findByPk(req.params.id)
    .then((artist) => artist.update(req.body))
    .then((artist) => res.send(artist))
    .catch(next);
});

module.exports = app;
