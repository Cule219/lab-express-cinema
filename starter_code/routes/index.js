const express = require("express");
const router = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get("/", (req, res, next) => {
  console.log("called");
  res.json({ message: "index" });
});

router.get("/movies", (req, res, next) => {
  Movie.find().then(movies => {
    res.json({ movies }); //Sending plants to the client
  })
});

module.exports = router;
