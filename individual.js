var my_app = angular.module("my-app",[])
my_app.controller("EventController", function($scope, $http){
	var url = "http://eventmanager-server.herokuapp.com/events/";
	var url2= "http://eventmanager-server.herokuapp.com/comments";
	$scope.data = 1;
	$scope.user = {}
	var info;
	
	$scope.getEvent = function(){
		$scope.id = sessionStorage.getItem('id');
		console.log($scope.id);
		console.log(url+$scope.id+"?_embed=comments");
		$http.get(url+$scope.id+"?_embed=comments").then(
			function(response){
				console.log(response);
				$scope.event = response.data;
				console.log($scope.event.length);
				console.log($scope.data);
			},
			function(response){
				console.log(response);
			}
		);
	}
	$scope.home = function(){
		window.location.href="index.html";
	}

	$scope.reply = function(){
		info = {"body": $scope.body, "postId": 1}
		console.log(info);
		$http.post(url2, info).then(
		function(response){
			console.log(response);
			$scope.getEvent();
			},
			function(response){
				console.log(response);
			});
	}


	$scope.back = function(){
		window.location.href="index.html"
	}

	$scope.getEvent();

});