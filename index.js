require('dotenv').config()
const express = require('express')
var recipeRouter = require('./routes/recipe')
var userRouter = require('./routes/users')
var sessionRouter = require('./routes/sessions')
const mongoose = require('mongoose');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
const path = require('path')
const cors = require('cors');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

const app = express()

//Mongo
const port = process.env.PORT || 3000;
const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

//Express Guts
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('client/build'));
app.use('/api/sessions', sessionRouter)
app.use('/api/users', userRouter)
app.use('/api/recipes', recipeRouter);
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

var User = require('./model/user.model');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.log(err);
});


