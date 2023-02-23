import express, { json, static } from "express";
const app = express();
import { join } from "path";

export default app;

app.use(json());
app.use("/dist", static(join(__dirname, "../dist")));
app.use("/static", static(join(__dirname, "../static")));

app.get("/", (req, res) =>
  res.sendFile(join(__dirname, "../static/index.html"))
);

app.get("/artists", (req, res) => {
  res.sendFile(join(__dirname, "../static/index.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(join(__dirname, "../static/index.html"));
});

app.get("/faq", (req, res) => {
  res.sendFile(join(__dirname, "../static/index.html"));
});

app.use((err, req, res, next) => {
  res.status(500).send(err);
});
