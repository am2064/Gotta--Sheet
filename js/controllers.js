'use strict';

/* Controllers */

angular.module('myApp.controllers',[]).
controller('SheetsController', function($scope, $http, $resource, $route, $routeParams, $compile) {
	var Character = $resource("http://localhost:8000/api/v1/characters/:id");
	Character.get({id: $routeParams.id},
		function(res){
			$scope.character = res.character;
			$route.current.templateUrl = "/Gotta--Sheet/partials/" + $scope.character.game.name + "/show.html";
			$http.get($route.current.templateUrl).then(
				function (msg) {
					$('#views').html($compile(msg.data)($scope));
				},
				function(){
					$route.current.templateUrl = "/Gotta--Sheet/partials/default/show.html";
					$http.get($route.current.templateUrl).then(
						function (msg) {
							$('#views').html($compile(msg.data)($scope));
						});
				}
				);
		},
		function(msg){
			$route.current.templateUrl = "/Gotta--Sheet/partials/error.html";
			$scope.error = msg.data;
			$http.get($route.current.templateUrl).then(
					function (msg) {
						$('#views').html($compile(msg.data)($scope));
					});
		});

});
