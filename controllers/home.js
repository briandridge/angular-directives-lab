console.log("home.js homepage controller");

var db = require('../models');

function homePage(req, res) {
  res.sendFile(__dirname + '/public/index.html');
}

module.exports = {
  homePage: homePage,
};