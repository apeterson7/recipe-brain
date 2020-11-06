const express = require('express')
var birds = require('./routes/test-route')
const mongoose = require('mongoose');
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000;

const uri = process.env.ATLAS_URI

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

app.get('/', (req, res) => {
  res.send('Test DB')
})

app.use('/birds', birds)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})