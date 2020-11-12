var express = require('express');
var passport = require('passport');

var User = require('../model/user.model');

var router = express.Router();

// POST: api/sessions/login
router.post('/login',
            passport.authenticate('local', {
              successRedirect: '/',
              failureRedirect: '/login',
              failureFlash: true 
            }), function(req, res) {
              req.session.save(function (err) {
                if (err) {
                  return next(err);
                }

                res.redirect('/');
              });
            });

// POST: api/sessions/logout
router.get('/logout', function(req, res) {
  req.logout();
  req.session.save(function (err) {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.redirect('/login');
  });
});

module.exports = router;
