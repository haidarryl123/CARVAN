var app = angular.module('myApp', ["ngRoute"]);

app.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'layout/home.html',
	})
	.when('/mercedes', {
		templateUrl: 'layout/mercedes.html',
	})
	.when('/lamborghini', {
		templateUrl: 'layout/lamborghini.html',
	})
	.when('/bmw', {
		templateUrl: 'layout/bmw.html',
	})
	.when('/vinfast', {
		templateUrl: 'layout/vinfast.html',
	})
});

app.controller('myCtrl', function ($scope,$http) {
	$http.get('json/mercedes.json')
	.then(function(res){
		$scope.listMer = res.data;
	});
	$http.get('json/lamborghini.json')
	.then(function(resL){
		$scope.listLam = resL.data;
	});
	$http.get('json/bmw.json')
	.then(function(resB){
		$scope.listBMW = resB.data;
	});
	$http.get('json/vinfast.json')
	.then(function(resV){
		$scope.listVin = resV.data;
	});
});