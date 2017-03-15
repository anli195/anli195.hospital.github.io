var appModule = angular.module("appModule",[
    'ngRoute',
    'indexControllers',
    'personalModeler',
    'newsControllers',
    'departmentModule',
    'featuresControllers',
    'equipmentControllers',
    'guideControllers',
    'stopClinicalControllers',
    'medicalControllers',
    'surveyControllers'
]);
appModule.config(['$routeProvider',function ($routeProvider) {
    $routeProvider
        //首页Index
        .when('/index', {
            templateUrl: 'index/index.html'
        }).
        //焦点图banner详情
        when('/banner/:id', {
            templateUrl: 'details.html',
            controller:'bannerDetailController'
        }).
        //热门新闻详情
        when('/hotNew/:id', {
            templateUrl: 'details.html',
            controller:'hotNewsDetailController'
        }).
        //医院简介
        when('/intro', {
            templateUrl: 'intro/intro.html',
            controller:'menuController'
        }).
        //医院动态列表
        when('/news', {
            templateUrl: 'news/news.html',
            controller:'newsController'
        }).
        //医院动态详情
        when('/news/:id', {
            templateUrl: 'details.html',
            controller:'newsDetailController'
        }).
        //科室医生
        when('/department', {
            templateUrl: 'department/departmentSearch.html'
        }).
        //科室医生二级页面
        when('/department/:id', {
            templateUrl: 'department/departmentList.html'
        }).
        //科室医生详情页面
        when('/departmentDetails/:id', {
            templateUrl: 'department/departmentDetails.html',
            controller:"doctorsController"
        }).
        //医生预约挂号页面
        when('/doctorIntro/:id', {
            templateUrl: 'department/doctorIntro.html',
            controller:"doctorIntroController"
        }).
        //预约成功提示页面
        when('/success', {
            templateUrl: 'department/success.html'
        }).
        //特色技术列表
        when('/features', {
            templateUrl: 'features/features.html',
            controller:'featuresController'
        }).
        //特色技术详情
        when('/features/:id', {
            templateUrl: 'details.html',
            controller:'featuresDetailController'
        }).
        //医疗设备列表
        when('/equipment', {
            templateUrl: 'equipment/equipment.html',
            controller:'equipmentController'
        }).
        //医疗设备详情
        when('/equipment/:id', {
            templateUrl: 'details.html',
            controller:'equipmentDetailController'
        }).
        //楼层分布
        when('/floor', {
            templateUrl: 'floor/floor.html'
        }).
        //联系医院
        when('/contact', {
            templateUrl: 'contact/contact.html'
        }).
        //就医指南列表
        when('/guide', {
            templateUrl: 'guide/guide.html',
            controller:'guideController'
        }).
        //就医指南详情
        when('/guide/:id', {
            templateUrl: 'details.html',
            controller:'guideDetailController'
        }).
        //预约挂号
        when('/appointment', {
            templateUrl: 'appointment/appointment.html'
        }).
        //叫号查询
        when('/numSearch', {
            templateUrl: 'numSearch/search.html'
        }).
        //叫号查询
        when('/numSearch/:id', {
            templateUrl: 'numSearch/numSearch.html'
        }).
        //停诊通知列表
        when('/stopClinical', {
            templateUrl: 'stopClinical/stopClinical.html',
            controller:'stopClinicalController'
        }).
        //停诊通知详情
        when('/stopClinical/:id', {
            templateUrl: 'details.html',
            controller:'stopClinicalDetailController'
        }).
        //体检服务列表
        when('/medical', {
            templateUrl: 'medical/medical.html',
            controller:'medicalController'
        }).
        //体检服务详情
        when('/medical/:id', {
            templateUrl: 'details.html',
            controller:'medicalDetailController'
        }).
        //停诊通知详情
        when('/medical/:id', {
            templateUrl: 'details.html',
            controller:'medicalDetailController'
        }).
        //满意度调查列表
        when('/survey', {
            templateUrl: 'survey/surveyList.html',
            controller:'surveyController'
        }).
        //满意度调查详情
        when('/survey/:id', {
            templateUrl: 'survey/surveyDetails.html',
            controller:'surveyDetailController'
        }).
        //來院导航
        when('/navigation', {
            templateUrl: 'navigation/navigation.html'
        }).
        //投诉建议
        when('/complaints', {
            templateUrl: 'complaints/complaints.html'
        }).
        //个人中心
        when('/personal', {
            templateUrl: 'personal/personal.html',
            controller:'personalController'
        }).
        //预约挂号记录
        when('/record', {
            templateUrl: 'personal/record_list.html'
        }).
        //常用就诊人管理
        when('/patient', {
            templateUrl: 'personal/patient_list.html'
        }).
        //我的报告单
        when('/report', {
            templateUrl: 'personal/report_list.html'
        }).
        //我的医院清单
        when('/lists', {
            templateUrl: 'personal/hospital_list.html'
        })
        //默认显示
        .otherwise({
            redirectTo: '/index'
        });
}]);