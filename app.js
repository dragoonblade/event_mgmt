var my_app = angular.module("my-app",[])

my_app.service('dates', function(){
	this.manage = function(comments) {
		comments.forEach (function (comment) {
			comment.createdAt = new Date(comment.createdAt).toString().slice(4, 21);
		});
		return comments;
	}
});

my_app.controller("MainController", function($scope, $http){
	var url = "https://eventmanager-server.herokuapp.com/events?_page=";
	var url4= "https://eventmanager-server.herokuapp.com/events?organiser=";
	$scope.user = {}	// initializing memory
	var info;			// initializing memory
	$scope.data = 1;	// initializing page
	
	$scope.filter = function(){		//filter acc to organizer
		$scope.events.length=0;
		$http.get(url4+$scope.organiser).then(
		function(response){
			console.log(response);
			$scope.filterEvents = response.data
		},
		function(response){
			console.log(response);
		});
	}

	$scope.getEvents = function(){		//gets events in pages with limit 3
		console.log(url+$scope.data+"&_limit=3");
		$http.get(url+$scope.data+"&_limit=3").then(
		function(response){
			console.log(response);
			$scope.events = response.data;
			},
			function(response){
				console.log(response);
			});
	}

	$scope.getEvent = function(id){		//gets an individual event
		$scope.id = id
		sessionStorage.setItem('id', $scope.id);
		window.location.href="individual.html";
	}

	$scope.home = function(){
		window.location.href="index.php";
	}

	$scope.addEvent = function(){
		window.location.href="post.html";
	}
	
	$scope.next = function(){		//next page
		$scope.data++;
		$scope.getEvents();
	}

	$scope.back = function(){		//prev page
		$scope.data--;
		$scope.getEvents();
	}

	$scope.discard = function(){
		$scope.data = 1;
		$scope.getEvents();
	}
	$scope.getEvents();		//calls function automatically

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

my_app.controller("PostController", function($scope, $http){
	$scope.user = {}
	var url = "https://eventmanager-server.herokuapp.com/events";
	var data;
	
	$scope.getEvent = function(id){		//loads event after making it
		sessionStorage.setItem('id', id);
		window.location.href="individual.html";
	}
	
	$scope.home = function(){
		window.location.href="index.php";
	}

	$scope.postEvent = function(){		//posts a new event
		$scope.title=$scope.user.title;
		$scope.date=$scope.user.date;
		$scope.organiser=$scope.user.organiser;
		$scope.myCustomProperty=$scope.user.myCustomProperty;
		$scope.price=$scope.user.price;

		//optional property
		if ($scope.myCustomProperty.length > 0)
			data = { "title": $scope.title, "date": $scope.date, "organiser": $scope.organiser, "myCustomProperty": $scope.myCustomProperty, "price": $scope.price }
		else
			data = { "title": $scope.title, "date": $scope.date, "organiser": $scope.organiser, "price": $scope.price }

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