const express = require("express");
const router = express.Router();
const Movies = require("../models/movies");

/* GET home page */
router.get("/", (req, res, next) => {
  console.log("called");
  res.json({ message: "index" });
});

router.get("/movies", (req, res, next) => {
  Movies.find().then((moviesFromDb) => {
    res.json({ movies: moviesFromDb });
  });
});

router.get("/movies/:id", (req, res, next) => {
  Movies.findById(req.params.id).then((movie) => {
    res.json(movie);
  });
}); //this call sends api information to my app

router.post("/movies", (req, res, next) => {
  console.log(`made it to post`, req.body);
  Movies.create(req.body).then((res) => {
    res
      .json({ message: "Success! the movie was posted", newMovieId: res_id })
      .catch((err) => res.json(err));
  });
}); //posted to DB, problem was the I put req before res

module.exports = router;
