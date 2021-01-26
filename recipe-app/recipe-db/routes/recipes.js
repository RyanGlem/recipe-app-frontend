const express = require('express');
const models = require('../database/models')
const router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('this will deal with recipes');
});

router.get('/get', (req, res, next) => {
	models.Recipe.findAll()
		.then((recipes) => res.json({message: "Got recipes", recipes}))
		.catch((err) => next(err));
});

module.exports = router;