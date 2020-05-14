const express = require("express");
const router = express.Router();
const Movie = require('../models/Movie')

/* GET home page */
router.get("/", (req, res, next) => {
  console.log("called");
  res.json({ message: "index" });
});

module.exports = router;

router.get('/movies', (req,res)=>{
  Movie.find().then(movies=>{
    res.json({movies})
  })
})

router.get('/movie/:id', (req,res)=>{
  Movie.findById(req.params.id).then(movie=>{
    res.json({movie})
  })
})

router.post('/movies', (req,res)=>{
  Movie.create(req.body)
    .then((resDB) => res.json(resDB))
    .catch((err)=> console.log(err))
})