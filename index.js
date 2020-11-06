require('dotenv').config()
const express = require('express')
var birds = require('./routes/test-route')
var recipeRouter = require('./routes/recipe')
const mongoose = require('mongoose');
const path = require('path')
const cors = require('cors');

// import the module
const recipeScraper = require("recipe-scraper");

// enter a supported recipe url as a parameter - returns a promise
async function someAsyncFunc() {
  let recipe = await recipeScraper("https://www.epicurious.com/recipes/food/views/succotash-103725");
  console.log(recipe);
}

someAsyncFunc();

const app = express()
app.use(cors());

const port = process.env.PORT || 3000;

const uri = process.env.ATLAS_URI

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

app.use('/', express.static('client/build'));

app.use(express.json());
app.use('/birds', birds)
app.use('/api/recipe',recipeRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

