const express = require("express");
const router = express.Router();
const Movie = require('../models/Movie')

/* GET home page */
router.get("/", (req, res, next) => {
  console.log("called");
  res.json({ message: "index" });
});

router.get('/movies',(req,res) => {
  Movie.find().then(movies => {
    res.json({movies})
  })
  console.log('hello')
})

router.post("/new-movie",(req,res) => {
  console.log('made it to post')
  Movie.create(req.body)
  .then(resDB => {
    res.json(resDB)
  })
  .catch(err => {
    console.log(err)
  })
})

module.exports = router;
