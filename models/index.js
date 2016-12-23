console.log("index.js models");

var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/CardsAgainstAssembly"); //mongodb://localhost:27017/

module.exports.Card = require('./Card');