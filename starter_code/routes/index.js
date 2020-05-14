const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  console.log("called");
  res.json({ message: "index" });
});

router.get("/movies", (req, res) => {
  Movie.find().then((movies) => {
    res.json({ movies });
  });
});

router.get("/movies/:id", (req, res) => {
  Movie.findById(req.params.id).then((movie) => {
    res.json(movie);
  });
});

module.exports = router;