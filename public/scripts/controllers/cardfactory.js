console.log("cardfactory.js ok");

angular.module("CardsAgainstAssembly")
.factory("Card", CardFactory);

CardFactory.$inject = ['$resource', '$http'];

function CardFactory($resource, $http) {
	return $resource("https://localhost:3000"); // https://shielded-forest-41789.herokuapp.com/api/flashcards/:id http://localhost:3000
}