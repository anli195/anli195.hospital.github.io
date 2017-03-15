var featuresControllers = angular.module('featuresControllers', ['ngResource','dataControllers']);

featuresControllers.controller('featuresController',['$scope','dataService',function($scope,dataService){
    $scope.featuresService = dataService.query();
}]);
featuresControllers.controller('featuresDetailController',['$scope','$routeParams','dataService',function($scope,$routeParams,dataService){
    $scope.detail = dataService.get({id:$routeParams.id},function(banner){});
}]);
