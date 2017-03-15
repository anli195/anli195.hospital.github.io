var medicalControllers = angular.module('medicalControllers', ['ngResource','dataControllers']);

medicalControllers.controller('medicalController',['$scope','dataService',function($scope,dataService){
    $scope.medicalService = dataService.query();
}]);
medicalControllers.controller('medicalDetailController',['$scope','$routeParams','dataService',function($scope,$routeParams,dataService){
    $scope.detail = dataService.get({id:$routeParams.id},function(banner){});
}]);
