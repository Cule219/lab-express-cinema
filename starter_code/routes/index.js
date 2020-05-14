const express = require("express");
const router = express.Router();
const Movie = require('../models/Movie.js');

/* GET home page */
router.get("/", (req, res, next) => {
  console.log("called");
  res.json({ message: "a message from index.js!!!" });
});

router.get("/movies", (req, res, next) => {
  Movie.find().then(moviesFromDb => {
    res.json({ movies: moviesFromDb }); //Sending movies to the client
  })
});

router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id).then(movie => {
    res.json(movie); 
  })
});

router.post("/movies", (req, res, next)=> {
  Movie.create(req.body).then(response => {
    res.json({message:"success", newMovieId: response._id}) //Back to the front end sending another message 7
  }).catch(err => res.json({err}))
})

module.exports = router;

