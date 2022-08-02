const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const apiRoutes = require("./src/modules/routes/routes");

app.use(cors());

const uri =
  "mongodb+srv://armavir:armavir@cluster0.1bdo7.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

app.use(express.json());
app.use(bodyParser.json());
app.use("/", apiRoutes);

app.listen(8000, () => {
  console.log(`Server running at port 8000`);
});
