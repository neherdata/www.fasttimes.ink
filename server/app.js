const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use("/dist", express.static(path.join(__dirname, "../dist")));
app.use("/static", express.static(path.join(__dirname, "../static")));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../static/index.html"))
);

app.use("/artists", require("./artists"));

// app.get("/contact", (req, res) => {
//   res.sendFile(path.join(__dirname, "../static/index.html"));
// });

// app.get("/faq", (req, res) => {
//   res.sendFile(path.join(__dirname, "../static/index.html"));
// });

app.use((err, req, res, next) => {
  res.status(500).send(err);
});

module.exports = app;
