const express = require("express");
const router = express.Router();
const movies = require("../models/Movie")


/* GET home page */
router.get("/", (req, res, next) => {
  console.log("called");
  res.json({ message: "index" });
});

router.get("/movies", (req, res, next) => {
  console.log("movies called");
  res.json({ message: "index" });
});

router.get("/movies/:movieID", (req, res, next) => {
  console.log(req.params);
  movies.find({_id: req.params.movieID})
  .then(resDB=> {
      console.log('found movies');
      res.json(resDB);
    })
  .catch(err => console.log(err));
});

movies.find().then(movies => res.json({movies}))

module.exports = router;
