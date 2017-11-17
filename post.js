var my_app = angular.module("my-app",[])
my_app.controller("PostController", function($scope, $http){
	$scope.user = {}
	var url = "http://eventmanager-server.herokuapp.com/events";
	var data;
	
	$scope.getEvent = function(id){
		console.log(id);
		sessionStorage.setItem('id', id);
		window.location.href="individual.html";
	}
	$scope.home = function(){
		window.location.href="index.html";
	}

	$scope.postEvent = function(){
		$scope.title=$scope.user.title;
		$scope.date=$scope.user.date;
		$scope.organiser=$scope.user.organiser;
		$scope.myCustomProperty=$scope.user.myCustomProperty;
		$scope.price=$scope.user.price;
		if ($scope.myCustomProperty.length > 0)
			data = { "title": $scope.title, "date": $scope.date, "organiser": $scope.organiser, "myCustomProperty": $scope.myCustomProperty, "price": $scope.price }
		else
			data = { "title": $scope.title, "date": $scope.date, "organiser": $scope.organiser, "price": $scope.price }
		console.log(data);
		$http.post(url, data).then(
		function(response){
			console.log(response);
			$scope.event = response.data;
			sessionStorage.setItem('id', $scope.event.id);
			window.location.href="individual.html";
			},
			function(response){
				console.log(response);
			});
	}

});