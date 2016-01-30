angular.module('portfolio.service', [])
	.service('portfolioService', function ($http, apiHost) {
		return {
			get: function (page) {
				var path = apiHost + '/fixtures/page.json';
				var query = page ? 'page=' + page : '';
				var url = query ? path + '?' + query : path;
				return $http.get(url).then(function (response) {
					return response.data.results;
				});
			}
		};
	});
