const router = require('express').Router();
let Recipe = require('../model/recipe.model');
const recipeScraper = require("recipe-scraper");
var middleware = require('../lib/middleware');
var notifier = require('../lib/notifier');

router.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

// enter a supported recipe url as a parameter - returns a promise
async function getRecipe(link) {
  let recipe = await recipeScraper(link);
  return recipe;
}

router.get('/',(req, res) => {
  Recipe.find()
    .then(recipes => res.json(recipes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/:id',(req, res) => {
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

router.post('/text', middleware.isAuthenticated, (req, res) => {
  
  console.log(req.user);

  if(!req.body.recipe){
    res.status(400).json('no link included in request')
  };

  console.log('in notification')

  notifier.sendNotification(req.body.recipe, req.user);
  res.json('Cool');
});

module.exports = router;