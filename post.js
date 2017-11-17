var my_app = angular.module("my-app",[])
my_app.controller("MainController", function($scope, $http){
	$scope.user = {title: "Title", date: "November 16, 2017", organiser: "organiser 4", myCustomProperty: "myCustomProperty", price: 1201}
	var url = "http://eventmanager-server.herokuapp.com/events";
	var data;
	
	$scope.postEvent = function(){
		$scope.title=$scope.user.title;
		$scope.date=$scope.user.date;
		$scope.organiser=$scope.user.organiser;
		$scope.myCustomProperty=$scope.user.myCustomProperty;
		$scope.price=$scope.user.price;
		if ($scope.myCustomProperty.lenght > 0)
			data = { "title": $scope.title, "date": $scope.date, "organiser": $scope.organiser, "myCustomProperty": $scope.myCustomProperty, "price": $scope.price }
		else
			data = { "title": $scope.title, "date": $scope.date, "organiser": $scope.organiser, "price": $scope.price }
		console.log(data);
		$http.post(url, data).then(
		function(response){
			console.log(response);
			$scope.event = response.data;
			},
			function(response){
				console.log(response);
			});
	}

});