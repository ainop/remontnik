angular.module('portfolio', [
	'portfolio.service',
	'portfolio.directives',
	'portfolio.controller'
])
.value('staticHost', 'https://dev.remontnik.ru')
.value('apiHost', 'https://dev.remontnik.ru');
