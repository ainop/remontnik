angular.module('app.directives', [])
	.directive('background', function (staticHost) {
		return function (scope, element, attrs) {
			element.css('background-image', 'url(kitten.jpeg)');
		};
	});
