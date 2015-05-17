angular.module('portfolio.controller', ['portfolio.service'])
	.controller('PortfolioCtrl', function ($scope, portfolioService) {
		$scope.page = 0;
		$scope.results = [];

		$scope.more = function () {
			portfolioService.get($scope.page).then(function (results) {
				$scope.loading = false;
				Array.prototype.push.apply($scope.results, results);
				$scope.page += 1;
			});
		};

		$scope.loading = true;
		$scope.more();
	});
