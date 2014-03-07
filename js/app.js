'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
		'ngRoute',
		'myApp.filters',
		'myApp.services',
		'myApp.directives',
		'myApp.controllers'
		]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/characters/:id', { templateUrl: '/Gotta--Sheet/partials/blank.html', controller: 'SheetsController'});
	$routeProvider.when('/characters/', { templateUrl: '/Gotta--Sheet/partials/characters.html', controller: 'CharactersController'});
	$routeProvider.when('/',{templateUrl: '/Gotta--Sheet/partials/home.html'});
	$routeProvider.otherwise({templateUrl: '/Gotta--Sheet/partials/404.html'});
}]);
