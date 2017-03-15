var departmentModule = angular.module("departmentModule",['ngRoute','ngAnimate']);
departmentModule.directive('tabs',function(){
    return {
        link:function(scope, element){
            var tabs = element.find('.department_title ul li');
            var tabsCont = element.find('.department_cont p');
            tabs.on('click',function(event){
                var tab = event.target;
                var tabCurr = angular.element(tab);
                var index= tabCurr.index();
                tabs.removeClass("curr");
                tabCurr.addClass('curr');
                tabsCont.hide().eq(index).show();
            });
        }
    }
});

departmentModule.service('departmentService',function(){
    return [
        {
            id:1,
            title:"内科"
        },
        {
            id:2,
            title:"外科"
        },
        {
            id:3,
            title:"妇科--张三"
        },
        {
            id:4,
            title:"儿科"
        },
        {
            id:5,
            title:"心脏科"
        }
    ]
});
departmentModule.controller('departmentController',['$scope','$routeParams','departmentService',function($scope,$routeParams,departmentService){
    $scope.id = $routeParams.id;
    $scope.departmentService = departmentService;
    var searchText = angular.element("input[type='text']");
    var search_list = angular.element(".search_list");
    var department = angular.element(".department");
    var clear_cont = angular.element(".clear_cont");
    $scope.showSearchText = function(){
        if("" == searchText.val()){
            department.show();
            search_list.hide();
            clear_cont.hide();
        }else {
            department.hide();
            search_list.show();
            clear_cont.show();
        }
    }
    $scope.clearSearchText = function(){
        searchText.val(searchText.defaultValue);
        department.show();
        search_list.hide();
        clear_cont.hide();
    }
}]);


//医生预约挂号页面
departmentModule.service('doctors',function(){
    return [
        {
            "id":"1",
            "type":"主",
            "name":"王潇潇",
            "cont":"主治：111糖尿病、矮小症、肥胖症等性早熟等小儿内分泌疾病。"
        },
        {
            "id":"2",
            "type":"副",
            "name":"王小小",
            "cont":"主治：222糖尿病、矮小症、肥胖症等性早熟等小儿内分泌疾病。"
        },
        {
            "id":"3",
            "type":"普",
            "name":"小小王",
            "cont":"主治：333糖尿病、矮小症、肥胖症等性早熟等小儿内分泌疾病。"
        }
    ]
});
departmentModule.controller('doctorsController',["$scope","doctors",function($scope,doctors){
    $scope.doctors = doctors;
}]);
departmentModule.directive('convention',function(){
    return {
        link:function(scope, element){
            var aLinks = element.find('.schedule tr td a');
            var addPatient = element.find('.addPatient');
            var selectPatient = element.find('.selectPatient a');
            var patients = element.find('.patient_list span p');
            var doctor_cont = element.find('.doctor_cont');
            var patient_list = element.find('#patient_list');
            var cancel = element.find('.cancel');

            aLinks.on('click',function(event){
                var aLink = angular.element(event.target);
                aLinks.removeClass("curr");
                aLink.addClass("curr");
                addPatient.show();
                doctor_cont.hide();
            });
            selectPatient.on('click',function(){
                patient_list.show();
            });
            patients.on('click',function(event){
                var patient = angular.element(event.target);
                selectPatient.text(patient.text());
                patients.removeClass("curr");
                patient.addClass("curr");
                patient_list.hide();
                console.log(patient_list)
            });
            cancel.on('click',function(event){
                selectPatient.text("请选择就诊人");
                angular.element(event.target).parents('.layout').hide();
            });

            var ok = element.find('.btn a');
            var confirm_info = element.find('#confirm_info');
            var prompt = element.find('.prompt');
            ok.on('click',function(){
                if("请选择就诊人" == selectPatient.text()){
                    prompt.fadeIn(2000).fadeOut(2000);
                    return;
                }
                confirm_info.show();
            });
        }
    }
});
departmentModule.controller('doctorIntroController',["$scope","$routeParams","doctors",function($scope,$routeParams,doctors){
    $scope.doctors = doctors;
    $scope.id = $routeParams.id;
}]);


departmentModule.controller('timeController',["$scope","$timeout",function($scope,$timeout){
    $scope.time=5;
    $timeout(function(){
        window.location.href = "#/record";
    },5000);
    setInterval(function(){
        $scope.$apply(function(){
            $scope.time -= 1;
        });
    },1000);
}]);