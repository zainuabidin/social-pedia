const express = require("express");
const db = require("./config/connection");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require("./routes"));

db.once("open", () => {
  console.log("database connected")
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});