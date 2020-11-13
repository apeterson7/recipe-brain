var config = require('../config');
var client = require('twilio')(config.accountSid, config.authToken);

var sendNotification = function(recipe, user) {
  console.log('in notification')
  // Send the notification
  client.messages.create({
    to: phoneNumber(user),
    from: config.phoneNumber,
    body: buildMessage(recipe)
  })
  .then(function(res) {
    console.log(res.body);
  })
  .catch(function(err) {
    console.log(err);
  });
};

var phoneNumber = function(user) {
  return "+" + user.countryCode + user.phoneNumber;
};

var buildMessage = function(recipe) {
  console.log(recipe.ingredients);
  let message = recipe.ingredients.reduce((acc, curr) => { return acc + curr.name + "\n" }, '');
  console.log(message);
  return message;
};

exports.sendNotification = sendNotification;
