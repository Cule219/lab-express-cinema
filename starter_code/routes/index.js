const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");
const Thing = require('../models/thing-model');
const uploader = require('../configs/cloudinary-setup');


/* GET home page */
router.get("/", (req, res, next) => {
  console.log("called");
  res.json({ message: "index" });
});

router.get('/movies', (req, res) => {
  Movie.find().then(movies => {
    res.json(movies)
  })
})

router.get('/movies/:id', (req, res) => {
  Movie.findById(req.params.id).then(movies => {
    res.json(movies)
  })
})

router.post('/movies', (req, res) => {
	// console.log('made it to post', req.body);
	Movie.create(req.body).then((resDB) => res.json(resDB)).catch((err) => console.log(err));
});

router.post('/upload', uploader.single("imageUrl"), (req, res, next) => {
  // console.log('file is: ', req.file)

  if (!req.file) {
    next(new Error('No file uploaded!'));
    return;
  }
  // get secure_url from the file object and save it in the 
  // variable 'secure_url', but this can be any name, just make sure you remember to use the same in frontend
  res.json({ secure_url: req.file.secure_url });
})


router.get('/things', (req, res, next) => {
    Thing.find()
    .then(thingsFromDB => {
        res.status(200).json(thingsFromDB)
    })
    .catch(err => next(err))
})

router.post('/things/create', (req, res, next) => {
    // console.log('body: ', req.body); ==> here we can see that all
    // the fields have the same names as the ones in the model so we can simply pass
    // req.body to the .create() method
    
    let movie={title:req.body.name, description: req.body.description, image: req.body.imageUrl}

    Movie.create(movie)
    .then( aNewThing => {
        // console.log('Created new thing: ', aNewThing);
        res.status(200).json(aNewThing);
    })
    .catch( err => next(err) )
})

module.exports = router;

