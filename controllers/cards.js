// replaced, check it works

console.log("cards.js card controller");

var Card = require('../models/Card');
// var db = require('../models');

// GET ALL
function getAll(request, response) {
  Card.find(function(error, cards) {
    if(error) response.json({message: 'Could not find a card'});

    response.json(cards);
    console.log("getAll in cards.js");
  }).select('-__v');
}

// POST
function createCard(request, response) {
  console.log('in POST');
  console.log('body:',request.body);

  var card = new Card(request.body);

  card.save(function(error) {
    if(error) response.json({messsage: 'Could not ceate card b/c:' + error});

    response.json({card: card});
  });
}

// GET
function getCard(request, response) {
  var id = request.params.id;

  Card.findById({_id: id}, function(error, card) {
    if(error) response.json({message: 'Could not find card b/c:' + error});

    response.json({card: card});
  }).select('-__v');
}

function updateCard(request, response) {
  var id = request.params.id;

  Card.findById({_id: id}, function(error, card) {
    if(error) response.json({message: 'Could not find card b/c:' + error});

    if(request.body.name) card.name = request.body.name;
    if(request.body.location) card.location = request.body.location;
    if(request.body.status) card.status = request.body.status;

    card.save(function(error) {
      if(error) response.json({messsage: 'Could not update card b/c:' + error});

      response.json({message: 'Card successfully updated', card: card});
    });
  }).select('-__v');
}

function removeCard(request, response) {
  var id = request.params.id;

  Card.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete card b/c:' + error});

    response.json({message: 'Card successfully deleted'});
  }).select('-__v');
}

module.exports = {
  getAll: getAll,
  createCard: createCard,
  getCard: getCard,
  updateCard: updateCard,
  removeCard: removeCard
};