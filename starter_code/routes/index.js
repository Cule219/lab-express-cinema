const express = require("express");
const router = express.Router();
const Movies = require('../models/Movies')

/* GET home page */
router.get("/", (req, res, next) => {
  Movies.find().then(moviesDB=>{
    res.json({movies: moviesDB})
  })
  console.log("called");
  res.json({ message: "index" });
});

router.get("/movies", (req, res) => {
  Movies.find().then(movies => {
    res.json({movies}); //Sending movies to the client
  })
});

router.get("/movies/:id", (req, res) => {
  Movies.findById(req.params.id).then(movie => {
    res.json(movie); 
  })
});
// router.post('/new-movies', (req, res)=>{
// Movies.create(req.body)
// .then(resDb)
// })
// .catch(err =>{
//   console.log(err)
// })

module.exports = router;
