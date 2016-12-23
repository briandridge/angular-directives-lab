var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

var cardsController = require('../controllers/cards');
var homeController = require('../controllers/home');

// http://127.0.0.1:3000/criminals
router.route('/')
  .get(homeController.homePage);


router.route('/cards')

  //GET all cards
  .get(cardsController.getAll)

  //POST a new card
  .post(cardsController.createCard);


router.route('/cards/:id')

  // GET return specific card 
  .get(cardsController.getCard)

  // PATCH update existing card
  .patch(cardsController.updateCard)

  // DELETE remove specific card from DB
  .delete(cardsController.removeCard);


module.exports = router;