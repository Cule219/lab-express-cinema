const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  console.log("called");
  res.json({ message: "index" });
});

router.get("/movies", (req, res) => {
  Movie.find()
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

module.exports = router;
