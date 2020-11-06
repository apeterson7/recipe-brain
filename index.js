require('dotenv').config()
const express = require('express')
var birds = require('./routes/test-route')
var recipeRouter = require('./routes/recipe')
const mongoose = require('mongoose');
const path = require('path')
const cors = require('cors');

const app = express()
app.use(cors());

const port = process.env.PORT || 3000;

const uri = process.env.ATLAS_URI

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

app.use('/', express.static('client/build'));

app.use(express.json());
app.use('/birds', birds)
app.use('/api/recipes',recipeRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

