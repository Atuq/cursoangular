var app = angular.module('testApp', []);

app.controller("ClientListController", function($scope) {
  $scope.clients = [
    {"surname": "Vasquez", "name": "Jose"},
    {"surname": "Smith", "name": "Jon"}
  ];
});
