var indexControllers = angular.module('indexControllers', ['ngResource','dataControllers']);
//创建Banner
indexControllers.directive('banner',["$timeout", function ($timeout) {
    return {
        restrict:'AE',
        templateUrl:'index/banner.html',
        replace:true,
        link:function(){
            $timeout(function(scope, element, attrs, ctrl) {
                $('#owl-demo', element).owlCarousel({
                    items : 1,
                    navigation : false, // Show next and prev buttons
                    slideSpeed : 300,
                    paginationSpeed : 400,
                    singleItem:true,
                    lazyLoad : true
                });
            }, 500)
        }
    }
}]);
indexControllers.controller('bannerController',['$scope','dataService',function($scope,dataService){
    $scope.bannerService = dataService.query();
}]);
indexControllers.controller('bannerDetailController',['$scope','$routeParams','dataService',function($scope,$routeParams,dataService){
    $scope.detail = dataService.get({id:$routeParams.id},function(banner){});
}]);
//创建Menu
indexControllers.directive('menu',function(){
    return {
        restrict:'AE',
        templateUrl:'index/menu.html',
        replace:true
    }
});
indexControllers.service('menuService',function(){
    return [
        {
            id:'1',
            title:'医院简介',
            imgUrl:'../skin/default/images/menu/yyjj.png',
            url:'#/intro'
        },
        {
            id:'2',
            title:'医院动态',
            imgUrl:'../skin/default/images/menu/yydt.png',
            url:'#/news'
        },
        {
            id:'3',
            title:'科室医生',
            imgUrl:'../skin/default/images/menu/ksys.png',
            url:'#/department'
        },
        {
            id:'4',
            title:'特色技术',
            imgUrl:'../skin/default/images/menu/tsjs.png',
            url:'#/features'
        },
        {
            id:'5',
            title:'医疗设备',
            imgUrl:'../skin/default/images/menu/ylsb.png',
            url:'#/equipment'
        },
        {
            id:'6',
            title:'楼层分布',
            imgUrl:'../skin/default/images/menu/lcfb.png',
            url:'#/floor'
        },
        {
            id:'7',
            title:'联系医院',
            imgUrl:'../skin/default/images/menu/lxyy.png',
            url:'#/contact'
        },
        {
            id:'8',
            title:'就医指南',
            imgUrl:'../skin/default/images/menu/jyzn.png',
            url:'#/guide'
        },
        {
            id:'9',
            title:'预约挂号',
            imgUrl:'../skin/default/images/menu/yygh.png',
            url:'#/appointment'
        },
        {
            id:'10',
            title:'叫号查询',
            imgUrl:'../skin/default/images/menu/jhcx.png',
            url:'#/numSearch'
        },
        {
            id:'11',
            title:'停诊通知',
            imgUrl:'../skin/default/images/menu/tztz.png',
            url:'#/stopClinical'
        },
        {
            id:'12',
            title:'体检服务',
            imgUrl:'../skin/default/images/menu/tjfw.png',
            url:'#/medical'
        },
        {
            id:'13',
            title:'满意度调查',
            imgUrl:'../skin/default/images/menu/myddc.png',
            url:'#/survey'
        },
        {
            id:'14',
            title:'来院导航',
            imgUrl:'../skin/default/images/menu/lydh.png',
            url:'#/navigation'
        },
        {
            id:'15',
            title:'投诉建议',
            imgUrl:'../skin/default/images/menu/tsjy.png',
            url:'#/complaints'
        },
        {
            id:'16',
            title:'个人中心',
            imgUrl:'../skin/default/images/menu/grzx.png',
            url:'#/personal'
        }
    ]
})
    .controller('menuController',['$scope','$routeParams','menuService',function(scope,routeParams,menuService){
        scope.menuService = menuService;
        scope.id = routeParams.id;
    }]);
//创建hotNews
indexControllers.directive('hotNews',function(){
    return {
        restrict:'AE',
        templateUrl:'index/hot_news.html',
        replace:true
    }
});
indexControllers.controller('hotNewsController',['$scope','$routeParams','$timeout','dataService',function($scope,$routeParams,$timeout,dataService){
    $scope.hotNewsService = dataService.query();
    $scope.refresh = function(){
        var target = angular.element('.refresh');
        target.addClass('curr');
        $timeout(function(){
            target.removeClass('curr');
        },2000);
    }
}]);
indexControllers.controller('hotNewsDetailController',['$scope','$routeParams','dataService',function($scope,$routeParams,dataService){
    $scope.detail=dataService.get({id:$routeParams.id},function(banner){});
}]);
