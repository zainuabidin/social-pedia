const express = require("express");
const app = express();
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
const userRoute = require("./routes/Users")



dotenv.config();
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);


app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);



app.listen(3001, () => {
  console.log("express is running");
});
