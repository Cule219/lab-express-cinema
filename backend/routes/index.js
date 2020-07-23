const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Movie = require('../models/Movie')

/* GET home page */
router.get("/", (req, res, next) => {
  console.log("called home route");
  res.json({ message: "index" });
});

/* GET movies page*/
router.get("/movies", (req, res, next) => {
  console.log("called movies route");
  Movie.find().then((movies)=>{
    res.json({movies})
  })
});

/* GET movie details page*/
router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id).then((movie)=>{
    res.json({movie})
  })
});

/*POST new movie to databse*/
router.post("/new", (req, res, next) =>{
  Movie.create(req.body).then(()=>{
    res.send(req.body.title + ' succesfully added to database')
  })
})

module.exports = router;
