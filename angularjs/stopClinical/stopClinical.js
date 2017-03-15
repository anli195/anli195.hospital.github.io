var stopClinicalControllers = angular.module('stopClinicalControllers', ['ngResource','dataControllers']);

stopClinicalControllers.controller('stopClinicalController',['$scope','dataService',function($scope,dataService){
    $scope.stopClinicalService = dataService.query();
}]);
stopClinicalControllers.controller('stopClinicalDetailController',['$scope','$routeParams','dataService',function($scope,$routeParams,dataService){
    $scope.detail = dataService.get({id:$routeParams.id},function(banner){});
}]);
