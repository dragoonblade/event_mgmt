<!--php for heroku-->
<!Doctype html>
<html>
	<head>
		<meta charset = "utf-8" />
    	<meta name="viewport" content="width=device-width, initial-scale=1">
    	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	    <link rel="stylesheet" href="main.css">   
    	<link rel="stylesheet" href="build.css">   
	</head>
	<body style="background-color: #e0e0e0">
	<application ng-app="my-app" ng-controller="MainController">
		<nav class="nav navbar-fixed-top">
      		<div class="container-fluid">
        		<ul class="pull-left in">
		         	 <li ng-click="home()"><h3><img src="logo.png" alt="logo">&emsp;Online Event Management System</h3></li>
		        </ul>
		        <ul class="pull-right in">
		          	<li ng-click="addEvent()"><h3>	Add Event</h3></li>
		        </ul>
		        <ul class="pull-right in">
		        	<li ng-click="addEvent()">&emsp;&emsp;</li>	
		        </ul>
		        <ul class="pull-right in">
		         	<li ng-click="home()"><h3>All Events</h3></li>
		        </ul>
		    </div>
    	</nav>

		<br><br><br><br><br><br><br><br><br>

		<div class="container-fluid">
			<div class="row">
				<div class="col-md-1"></div>
				<div class="col-md-11">
					<div class="container-fluid">
						<div class="form-group row">
							<div class="col-md-4">
					            <input class="form-control" id="search" type="text" placeholder="Type here" ng-model="organiser" />
					        </div>
							<div class="col-md-4">
					            <a class="form-control btn-primary btn" ng-click="filter()">Search</a>
					        </div>
							<div class="col-md-4">
					            <a class="form-control btn-primary btn" ng-click="discard()">Discard Filter</a>
					        </div>
				        </div>
					</div>

					<br><br>

					<div class="container" ng-repeat="event in filterEvents" ng-if="filterEvents.length">
						<div class="row" style="border: 1px solid #ccc; background-color: #fff">
							<div class="col-md-2">
                				<img src="event.png">
                			</div>
							<div class="col-md-7">
								<br>
								<div>
									<span class="title">{{event.title}}</span>
								</div>
								Organizer: {{event.organiser}}<br>
								Date: {{event.date}}<br>
								<div ng-if="event.hasOwnProperty('myCustomProperty')">Speciality: {{event.myCustomProperty}}</div>
								<br>
							</div>
							<div class="col-md-3">
								<br>
				                Price: &#x20b9; {{event.price}} <br/><br/>
				                <a class="btn btn-primary" ng-click="getEvent(event.id)">See Event</a><br/>
							</div>
						</div>
						<hr>
					</div>

					<div class="container" ng-repeat="event in events" ng-if="events.length">
						<div class="row" style="border: 1px solid #ccc; background-color: #fff">
							<div class="col-md-2">
                				<img src="event.png">
                			</div>
							<div class="col-md-7">
								<br>
								<div>
									<span class="title">{{event.title}}</span>
								</div>
								Organizer: {{event.organiser}}<br>
								Date: {{event.date}}<br>
								<div ng-if="event.hasOwnProperty('myCustomProperty')">Speciality: {{event.myCustomProperty}}</div>
								<br>
							</div>
							<div class="col-md-3">
								<br>
				                Price: &#x20b9; {{event.price}} <br/><br/>
				                <a class="btn btn-primary" ng-click="getEvent(event.id)">See Event</a><br/>
							</div>
						</div>
						<br>
					</div>
				</div>
			</div>
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-1"></div>
					<div class="col-md-11">
						<div class="form-group row">
							<div class="col-md-4">
								<a class="form-control btn-primary btn" ng-click="next()">Next</a>
							</div>
							<div class="col-md-4">
							    <a class="form-control btn-success btn" ng-click="addEvent()">Add Event</a>
							</div>
							<div class="col-md-4">
								<a class="form-control btn-primary btn" ng-click="back()" ng-if="data>1">Back</a> 
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<br><br><br>

		<footer class="fot">
	      <div class="container-fluid">
	        <br>
	        <ul class="pull-left in">
	          <li><a>Online Event Management System</a></li>
	        </ul>
	        <ul class="pull-right in">
	          <li><a href="#">Terms of Service</a></li>
	          <li><a href="#">Privacy Policy</a></li>
	          <li><a href="#">Legal</a>&emsp;&emsp;</li>
	        </ul>
	        <br><br><br>
	      </div>
	    </footer>
		
	</application>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular-sanitize.js"></script>
	<script src="get.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	</body>
</html>
