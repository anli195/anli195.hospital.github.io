var equipmentControllers = angular.module('equipmentControllers', ['ngResource','dataControllers']);

equipmentControllers.controller('equipmentController',['$scope','dataService',function($scope,dataService){
    $scope.equipmentService = dataService.query();
}]);
equipmentControllers.controller('equipmentDetailController',['$scope','$routeParams','dataService',function($scope,$routeParams,dataService){
    $scope.detail = dataService.get({id:$routeParams.id},function(banner){});
}]);
