var newsControllers = angular.module('newsControllers', ['ngResource','dataControllers']);

newsControllers.controller('newsController',['$scope','dataService',function($scope,dataService){
    $scope.newsService = dataService.query();
}]);
newsControllers.controller('newsDetailController',['$scope','$routeParams','dataService',function($scope,$routeParams,dataService){
    $scope.detail = dataService.get({id:$routeParams.id});
}]);
