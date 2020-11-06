const router = require('express').Router();
let Recipe = require('../model/recipe.model');

router.route('/').get((req, res) => {
  Recipe.find()
    .then(recipes => res.json(recipes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
  
  console.log(req.body);

  let recipe = new Recipe(req.body);

  recipe.save()
    .then(() => res.json('Recipe added!'))
    .catch(err => res.status(400).json('Error: ' + err));

  res.send("cool");
});

module.exports = router;