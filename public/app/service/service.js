angular.module("gotApp").factory("DataService", ["$http", "$q", function($http, $q) {

	return {
		getAll: function() {
		  var defered = $q.defer();

		  $http.get("http://localhost:8000/app/data/data.json")
		    .then(function(response) {
		      defered.resolve(response.data.records);
		    }, function(response) {
		      defered.reject(response.statusText)
		    });


		  return defered.promise;
		}
	};

}]);

angular.module("gotApp").factory("UrlDataService", ["$http", "$q", function($http, $q) {

  return {
    getInfo: function(name) {
      var defered = $q.defer();

      var url = 'http://en.wikipedia.org/w/api.php?titles=' + name + '&action=query&format=json&callback=JSON_CALLBACK&prop=extracts|pageimages&piprop=thumbnail&pithumbsize=200';
      console.log(url);

      $http.jsonp(url).then(function(response) {
          defered.resolve(response.data);
        }, function(response) {
          defered.reject(response.data)
        });


      return defered.promise;
    }
  };

}]);