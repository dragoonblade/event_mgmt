var my_app = angular.module("my-app",[])
my_app.controller("EventController", function($scope, $http){
	var url = "http://eventmanager-server.herokuapp.com/events/";
	var url2= "http://eventmanager-server.herokuapp.com/comments";
	$scope.data;
	$scope.user = {}
	var info;
	
	$scope.getEvent = function(){		//gets an event
		$scope.id = parseInt(sessionStorage.getItem('id'));
		$http.get(url+$scope.id+"?_embed=comments").then(
			function(response){
				console.log(response);
				$scope.event = response.data;
				//conv date to a more manageable form 
				for (i = $scope.event.comments.length - 1; i >= 0; i--)				
					$scope.event.comments[i].createdAt = new Date($scope.event.comments[i].createdAt).toString().slice(4, 21	);
				
			},
			function(response){
				console.log(response);
			}
		);
	}
	$scope.home = function(){
		window.location.href="index.html";
	}


	$scope.addEvent = function(){
		window.location.href="post.html";
	}
	$scope.reply = function(){		//commenting
		info = {"body": $scope.body, "postId": $scope.id}
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


	$scope.back = function(){
		window.location.href="index.html"
	}

	$scope.getEvent();		//calls function automatically

});