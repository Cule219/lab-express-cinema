require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");
const movies = require("./bin/seeds");
const Movie = require("./models/Movie");
mongoose
  .connect("mongodb://localhost/starter-code", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(async x => {
    await console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    //let data1 = await Movie.insertMany(movies);
    //console.log(data1);
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

// Middleware Setup
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const index = require("./routes/index");
app.use("/", index);
// app.get("/movies", (req, res, next) => {
//   Movie.find(mov => {
//     console.log(mov);
//     res.json(mov);
//   });
// });
app.listen(5000, () => console.log("App listening on port 5000!"));
module.exports = app;
