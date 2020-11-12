const router = require('express').Router();
let Recipe = require('../model/recipe.model');
const recipeScraper = require("recipe-scraper");
var middleware = require('../lib/middleware');

router.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

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

router.get('/:id', middleware.isAuthenticated, (req, res) => {
  let id = req.params.id;
  Recipe.findById(id)
    .then(recipe => res.json(recipe))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.delete('/:id', middleware.isAuthenticated, (req, res) => {
  let id = req.params.id;
  Recipe.findByIdAndDelete(id)
    .then(recipe => res.json(recipe))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/', middleware.isAuthenticated, (req, res) => {
  
  console.log(req.body);

  let recipe = new Recipe(req.body);
  console.log(recipe);

  recipe.save()
    .then(() => res.json('Recipe added!'))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.put('/', middleware.isAuthenticated, (req, res) => {
  console.log(req.body);

  let recipe = Recipe.findById(req.body._id);
  
  // for (const [key, value] of Object.entries(req.body)) {
  //   console.log(`${key}: ${value}`);
  //   recipe.update({key: value}).then()
  //   .then(() => res.json(`${key} in Recipe updated!`))
  //   .catch(err => res.status(400).json('Error: ' + err));
  // }
  recipe.update({key: value}).then()
  .then(() => res.json(`${key} in Recipe updated!`))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/scrape', middleware.isAuthenticated, (req, res) => {
  
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