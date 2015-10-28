angular.module("gotApp").directive("directiveE", function() {
  return {
    restrict: "A",
    template: "<span><strong>{{data}}</strong></span>",
    controller: ["$scope", function($scope) {
      if (!$scope.data){
        $scope.data = "Character information not found"
      }
    }]
  };
})