var guideControllers = angular.module('guideControllers', ['ngResource','dataControllers']);

guideControllers.controller('guideController',['$scope','dataService',function($scope,dataService){
    $scope.guideService = dataService.query();
}]);
guideControllers.controller('guideDetailController',['$scope','$routeParams','dataService',function($scope,$routeParams,dataService){
    $scope.detail = dataService.get({id:$routeParams.id},function(banner){});
}]);
