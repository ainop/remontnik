angular.module('portfolio.directives', [])
	.directive('portfolio', function () {
		return {
			restrict: 'E',
			controller: 'PortfolioCtrl',
			templateUrl: 'portfolio/portfolio.html'
		};
	});
