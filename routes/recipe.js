const router = require('express').Router();
let Recipe = require('../model/recipe.model');
const recipeScraper = require("recipe-scraper");

// enter a supported recipe url as a parameter - returns a promise
async function getRecipe(link) {
  let recipe = await recipeScraper(link);
  return recipe;
}

router.route('/').get((req, res) => {
  Recipe.find()
    .then(recipes => res.json(recipes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  let id = req.params.id;
  Recipe.findById(id)
    .then(recipe => res.json(recipe))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
  
  console.log(req.body);

  let recipe = new Recipe(req.body);
  console.log(recipe);

  recipe.save()
    .then(() => res.json('Recipe added!'))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/scrape').post((req, res) => {
  
  if(!req.body.link){
    res.status(400).json('no link included in request')
  };

  getRecipe(req.body.link).then(
    recipe => res.json(recipe)
  ).catch(
    err => res.status(400).json('Error: '+ err)
  );

});


module.exports = router;