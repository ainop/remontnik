angular.module('portfolio.service', [])
	.service('portfolioService', function ($http, apiHost) {
		return {
			get: function (page) {
				return $http.get(apiHost + '/api/v1/portfolio/all/', { page: page }).then(function (response) {
					return response.data.results;
				});
			}
		};
	});
