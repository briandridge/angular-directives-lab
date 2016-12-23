angular.module('CardsAgainstAssembly')
  .controller('CardsController', CardsController);

CardsController.$inject = ['$http', 'Card'];

function CardsController($http, Card) {
  var self = this;
  this.all = [];
  // self.addCriminal = addCriminal;
  // self.newCriminal = {};
  self.queryCards = queryCards;
  // self.deleteCriminal = deleteCriminal; 
  // self.editCriminal = editCriminal;

  function queryCards() {
    self.all = Card.query();
    console.log(self.all);
  }
  queryCards();
}


// function CardsController(){
//   var vm = this;
//   vm.questionsList = [
//     {question: "What is Batman's guilty pleasure?"},
//     {question: "I'm sorry professor, I couldn't complete my homework because _________."},
//     {question: "I get by with a little help from _________."},
//     {question: "_________. It's a trap!"},
//     {question: "The class field trip was completely ruined by _________."},
//     {question: "What's my secret power?"}
//   ];
// }





// Use the following Heroku endpoint to replace your hard-coded Cards: https://shielded-forest-41789.herokuapp.com/api/flashcards
// In cardsController.js, use $http to GET the flashcards. This should replace your questionsList array.
// Use $http to GET one flashcard by ID. Save this as vm.singleQuestion.