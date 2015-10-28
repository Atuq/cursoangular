
angular.module("gotApp").controller("CharactersController", ["$scope","$location", function($scope,$location){
	
	$scope.characters = [
		{nick:'Jon Snow',family:'Stark',season:'1'},
		{nick:'Batman',family:'Stark',season:'1'}, 
		{nick:'Sansa',	family:'Stark',season:'2'}, 
		{nick:'Tyrion',family:'Lannister',season:'3'},
		{nick:'Peterpan',family:'Lannister',season:'2'},
		{nick:'Mickey',family:'Lannister',season:'3'},
		{nick:'Nestor',family:'Kirchner',season:'4'}
	];	

	$scope.addCharacter = function () {
		/*
		$scope.characters.push(
			{ 
			 nick: $scope.newcharacter.nick, 
			 family: $scope.newcharacter.family,
			 season: $scope.newcharacter.season
			});
		*/
		$location.path('/characterslist');
	};

	$scope.clearFilters = function () {
		//todo validar esto de alguna forma!
		$scope.search.nick='';
		$scope.search.family='';
		$scope.search.season=''; 
	};
	
}])

angular.module("gotApp").controller("CharactersControllerJson", ["$scope", "$http", function($scope, $http) {
	$http({
	method: "GET",
	url: "http://localhost:8000/app/data/data.json"
	}).then(
	function(response) {
	  console.log(response);
	  $scope.characters = response.data.records;
	},
	function(response) {
	  console.log(response);
	  $scope.error = response.statusText;
	});


	$scope.addCharacter = function () {
		/*
		$scope.characters.push(
			{ 
			 nick: $scope.newcharacter.nick, 
			 family: $scope.newcharacter.family,
			 season: $scope.newcharacter.season
			});
		*/
		$location.path('/characterslist');
	};

	$scope.clearFilters = function () {
		//todo validar esto de alguna forma!
		$scope.search.nick='';
		$scope.search.family='';
		$scope.search.season=''; 
	};
}])

angular.module("gotApp").controller("ServJsonController", ["$scope", "DataService", function($scope, dataService) {

  dataService.getAll()
    .then(
      function(data) {
        $scope.characters = data;
      },
      function(error) {
        $scope.error = error;
      });

    $scope.addCharacter = function () {
		/*
		$scope.characters.push(
			{ 
			 nick: $scope.newcharacter.nick, 
			 family: $scope.newcharacter.family,
			 season: $scope.newcharacter.season
			});
		*/
		$location.path('/characterslist');
	};

	$scope.clearFilters = function () {
		//todo validar esto de alguna forma!
		$scope.search.nick='';
		$scope.search.family='';
		$scope.search.season=''; 
	};

}])

angular.module("gotApp").controller("UrlController", ["$scope", "$routeParams", "UrlDataService", function($scope, $routeParams ,urlDataService) {

	console.log($routeParams.nick);
	$scope.nick = $routeParams.nick;
	$scope.family = $routeParams.family;
	$scope.season = $routeParams.season;

  urlDataService.getInfo("Tyrion Lannister")
    .then(
      function(data) {
        $scope.data = data;
      },
      function(error) {
        $scope.error = error;
      });

}])

