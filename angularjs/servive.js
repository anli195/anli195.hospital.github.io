var dataControllers = angular.module('dataControllers', ['ngResource']);
dataControllers.service('dataService', ['$resource',function($resource){
    return $resource('json/:id.json', {}, {
        query: {method:'GET', params:{id:'banner'}, isArray:true}
    });
}]);