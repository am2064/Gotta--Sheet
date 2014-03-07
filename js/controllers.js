'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
controller('SheetsController', ['$scope','$http','$route','$routeParams','$compile', function($scope, $http, $route, $routeParams, $compile) {
	$http.get("http://localhost:8000/api/v1/characters/"+$routeParams.id).then(
		function(res){
			$scope.character = res.data.character;
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
		function(){
			$("#views").html("Error");
		});

}]);
