angular.module('CardsAgainstAssembly')
	.directive('wdiCard', wdiCard);

function wdiCard() {
	console.log("wdiCard ok?");
	var directive = {
		restrict: 'E',
		replace: true,
		templateUrl: 'templates/cardDirective.html',
		scope: {
			question: "@"
		}
	};
	return directive;
}