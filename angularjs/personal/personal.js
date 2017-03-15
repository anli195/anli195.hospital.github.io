var personalModeler = angular.module('personalModeler',[]);
personalModeler.service('personalList',function(){
    return [
        {
            "id":"1",
            "title":"首页",
            "imgUrl":"../skin/default/images/icon/icon_home.png",
            "url":"#/index"
        },
        {
            "id":"2",
            "title":"预约挂号记录",
            "imgUrl":"../skin/default/images/icon/icon_register.png",
            "url":"#/record"
        },
        {
            "id":"3",
            "title":"常用就诊人管理",
            "imgUrl":"../skin/default/images/icon/icon_personal.png",
            "url":"#/patient"
        },
        {
            "id":"4",
            "title":"我的报告单",
            "imgUrl":"../skin/default/images/icon/icon_repoet.png",
            "url":"#/report"
        },
        {
            "id":"5",
            "title":"我的医院清单",
            "imgUrl":"../skin/default/images/icon/icon_register.png",
            "url":"#/lists"
        }
    ]
});

personalModeler.controller('personalController',["$scope","personalList",function($scope,personalList){
    $scope.personalList = personalList;
}]);