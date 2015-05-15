angular.module('portfolio.controller', ['portfolio.service'])
	.controller('PortfolioCtrl', function ($scope, portfolioService) {
		$scope.loading = true;
		portfolioService.get().then(function (results) {
			$scope.loading = false;
			$scope.results = results;
		});
	});
