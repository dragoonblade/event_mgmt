var my_app = angular.module("my-app",[])
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