var	gotApp = angular.module("gotApp", ["ngRoute"]);
		
gotApp.config(function($routeProvider) {
	$routeProvider
	.when("/", 
		{
      		controller: "CharactersController",
      		templateUrl: "app/view/main.html"
    	})
    .when("/story", 
    	{
      		controller: "CharactersController",
      		templateUrl: "app/view/story.html"
    	})
    .when("/characterslist", 
    	{
      		controller: "CharactersController",
      		templateUrl: "app/view/characterslist.html"
    	})
    .when("/addcharacter", 
    	{
      		controller: "CharactersController",
      		templateUrl: "app/view/addcharacter.html"
    	})
    .when("/characterdetail", 
    	{
      		controller: "CharactersController",
      		templateUrl: "app/view/characterdetail.html"
    	})
    .when("/json", 
    	{
      		controller: "CharactersControllerJson",
      		templateUrl: "app/view/characterslist.html"
    	})
    .when("/servjson", 
    	{
      		controller: "ServJsonController",
      		templateUrl: "app/view/characterlistservice.html"
    	})
    .when("/servurl/:nick/:family/:season", 
    	{
      		controller: "UrlController",
      		templateUrl: "app/view/characterdetail.html"
    	})
    .otherwise({redirectTo: "/"});
});