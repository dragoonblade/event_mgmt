var my_app = angular.module("my-app",[])

my_app.service('dates', function(){
	this.manage = function(comments) {
		comments.forEach (function (comment) {
			comment.createdAt = new Date(comment.createdAt).toString().slice(4, 21);
		});
		return comments;
	}
});

my_app.controller("EventController", function($scope, $http, dates){
	var url = "https://eventmanager-server.herokuapp.com/events/";
	var url2= "https://eventmanager-server.herokuapp.com/comments";
	$scope.data;
	$scope.user = {};
	var info;
	
	$scope.getEvent = function(){		//gets an event
		$scope.id = parseInt(sessionStorage.getItem('id'));
		$http.get(url+$scope.id+"?_embed=comments").then(
			function(response){
				console.log(response.data);
				$scope.event = response.data;
				$scope.event.comments = dates.manage($scope.event.comments);		//conv date to a more manageable form 
			},
			function(response){
				console.log(response);
			}
		);
	}

	$scope.reply = function(){		//commenting
		info = {"body": $scope.body, "postId": $scope.id}
		$scope.body = "";
		console.log(info);
		$http.post(url2, info).then(
		function(response){
			console.log(response.data);
			$scope.getEvent();
			},
			function(response){
				console.log(response);
			});
	}

	$scope.home = function(){
		window.location.href="index.php";
	}


	$scope.addEvent = function(){
		window.location.href="post.html";
	}

	$scope.back = function(){
		window.location.href="index.php"
	}

	$scope.getEvent();		//calls function automatically

});