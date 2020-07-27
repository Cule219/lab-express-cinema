const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res) => {
  res.json({ message: "index" });
});
/* GET movie page */
router.get("/movies", (req, res) => {
  Movie.find().then((movies) => {
    res.json(movies);
  });
});
/* GET moviedatails page */
router.get("/movies/:id", (req, res) => {
  // console.log("17", req.params);
  Movie.findById(req.params.id).then((movies) => {
    res.json(movies);
  });
});

/* GET newmovie page */
router.post("/movies", (req, res) => {
  Movie.create(req.body).then((newmovie) => {
    res.json(newmovie);
  });
});

module.exports = router;
