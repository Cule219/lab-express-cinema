const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie.js");

/* GET home page */
router.get("/", (req, res, next) => {
  console.log("called");
  res.json({ message: "index" });
});

router.get("/movies", (req, res, next) => {
  console.log("Requested movies");
  Movie.find()
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

module.exports = router;
