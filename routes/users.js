var express = require('express');
var passport = require('passport');

var User = require('../model/user.model');

var router = express.Router();

router.get('/:username', function(req, res) {
  let username = req.params.username;
  User.find({ username: username }, function (err, docs) {
    if(docs){
      res.json(docs.length)
    }else if(err){
      res.sendStatus(400).json(err)
    }
  })
})

// POST: /api/users
router.post('/', function(req, res) {

  User.register(new User({
    email:       req.body.email,
    username:    req.body.username,
    countryCode: req.body.countryCode,
    phoneNumber: req.body.phoneNumber
  }), req.body.password, function(err, user) {
    if (err) {
      console.log(err)
      return res.redirect('/signup');
    }

    passport.authenticate('local')(req, res, function () {
      res.redirect('/');
    });
  });
});

router.get('/', (req, res, next) => {
  console.log('===== user!!======')
  console.log(req.user)
  if (req.user) {
      res.json({ user: req.user })
  } else {
      res.json({ user: null })
  }
})

module.exports = router;
