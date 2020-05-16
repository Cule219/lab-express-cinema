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
router.post('/movies', (req, res) => {
	// console.log('made it to post', req.body);
	Movies.create(req.body).then((resDB) => res.json(resDB)).catch((err) => console.log(err));
});


// include CLOUDINARY:
const uploader = require('../configs/cloudinary-setup');
 
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
 

const Thing = require('../models/thing');

router.get('/things', (req, res, next) => {
    Thing.find()
    .then(thingsFromDB => {
        res.status(200).json(thingsFromDB)
    })
    .catch(err => next(err))
})

router.post('/things/create', (req, res, next) => {
  console.log(req.body, 'everything is fine')
    // console.log('body: ', req.body); ==> here we can see that all
    // the fields have the same names as the ones in the model so we can simply pass
    // req.body to the .create() method
    let movie={title:req.body.name, description:req.body.description, image:req.body.imageUrl}
    Movies.create(movie)
    .then( aNewThing => {
        // console.log('Created new thing: ', aNewThing);
        res.status(200).json(aNewThing);
    })
    .catch( err => next(err) )
})


module.exports = router;
