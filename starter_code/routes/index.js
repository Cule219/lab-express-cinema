const express = require("express");
const router = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get("/", (req, res, next) => {
  console.log("called");
  res.json({ message: "index" });
});

//Sending movies to the client 
router.get("/movies", (req, res, ) => {
  Movie.find().then(movies => {
    res.json({ movies }); //Sending movies to the client
  })
});

//Sending specific movie to the client base on ID
router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id).then(movies => {
    res.json( movies ); //Sending movies to the client
  })
});

//Listening from the client
router.post("/movies", (req, res, next) => {  //Listening to post from client 
  Movie.create(req.body).then(response => {
    res.json({message:"success", newMovieID: response._id}) //Back to the front end sending another message 
  }).catch(err => res.json({err}))
})

module.exports = router;
