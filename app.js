const express = require("express");
const env = require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const { URL, PORT } = require("./config");
const apiRoutes = require("./src/modules/routes/routes");

app.use(cors());
app.use(express.json());
app.use("/", apiRoutes);

const connect = () => {
  try {
    mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  } catch (error) {
    console.log("no connect");
    process.exit(1);
  }
};

connect();
