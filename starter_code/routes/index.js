const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  console.log("called");
  res.json({ message: "index" });
});
router.get("/movies", (req, res) => {
  Movie.find().then(movies => {
    res.json(movies);
  });
});
router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id).then(movies => {
    res.json(movies);
    console.log(movies);
  });
});
router.post("/newmovie", (req, res, next) => {
  //console.log(req.body);
  Movie.create(req.body).then(newMovie => {
    res.json("You have added a new movie!");
  });
});

module.exports = router;
