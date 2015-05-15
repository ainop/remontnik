angular.module('portfolio.service', [])
	.service('portfolioService', function ($http, apiHost) {
		return {
			get: function () {
				return $http.get(apiHost + '/api/v1/portfolio/all/').then(function (response) {
					return response.data.results;
				});
			}
		};
	});
