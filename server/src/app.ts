import express from "express";

const app = express();

app.get("/", (_, res) => {
  res.send("KBD API Running");
});

export default app;
