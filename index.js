const express = require('express')
var birds = require('./routes/test-route')

const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/birds', birds)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})