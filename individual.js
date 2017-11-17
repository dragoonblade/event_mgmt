var my_app = angular.module("my-app",[])
my_app.controller("MainController", function($scope, $http){
	var url = "http://eventmanager-server.herokuapp.com/events/1?_embed=comments";
	var url2= "http://eventmanager-server.herokuapp.com/comments";
	$scope.data = 1;
	$scope.user = {}
	var info;
	
	$scope.getEvent = function(){
		$http.get(url).then(
		function(response){
			console.log(response);
			$scope.event = response.data;
			console.log($scope.event.length);
			console.log($scope.data);
			},
			function(response){
				console.log(response);
			});
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

	$scope.getEvent();

});