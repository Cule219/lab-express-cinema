const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  console.log("called");
  res.json({ message: "a message from index.js!!!" });
});

module.exports = router;
