var surveyControllers = angular.module('surveyControllers', ['ngResource','dataControllers']);

surveyControllers.controller('surveyController',['$scope','dataService',function($scope,dataService){
    $scope.surveyService = dataService.query();
}]);
surveyControllers.controller('surveyDetailController',['$scope','$routeParams','dataService',function($scope,$routeParams,dataService){
    $scope.detail = dataService.get({id:$routeParams.id},function(banner){});
}]);
