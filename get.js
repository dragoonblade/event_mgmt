var my_app = angular.module("my-app",[])
my_app.controller("MainController", function($scope, $http){
	var url = "http://eventmanager-server.herokuapp.com/events?_page=";
	var url4= "http://eventmanager-server.herokuapp.com/events?organiser=";
	$scope.data = 1;
	$scope.user = {}
	var info;
	
	console.log("ef");
	
	$scope.filter = function(){
		$scope.events.length=0;
		$http.get(url4+$scope.organiser).then(
		function(response){
			console.log(response);
			$scope.filterEvents = response.data;
			console.log($scope.events.length);
			console.log($scope.data);
			console.log(url4+$scope.organiser);
			},
			function(response){
				console.log(response);
			});
	}
	$scope.getEvents = function(){
		$http.get(url+$scope.data+"&_limit=3").then(
		function(response){
			console.log(response);
			$scope.events = response.data;
			console.log($scope.events.length);
			console.log($scope.data);
			console.log(url+$scope.data+"&_limit=3");
			},
			function(response){
				console.log(response);
			});
	}
	$scope.getEvent = function(id){
		console.log(id);
		sessionStorage.setItem('id', id);
		window.location.href="individual.html";
	}
	$scope.home = function(){
		window.location.href="index.html";
	}

	$scope.addEvent = function(){
		window.location.href="post.html";
	}
	$scope.next = function(){
		$scope.data++;
		$scope.getEvents();
	}
	$scope.back = function(){
		$scope.data--;
		$scope.getEvents();
	}
	$scope.discard = function(){
		$scope.data = 1;
		$scope.getEvents();
	}
	$scope.getEvents();

});