myApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/login");

  $stateProvider
     .state('login',{
      url:'/login',
      templateUrl: "views/login.html",
      controller: "MainController"
    })
     $stateProvider
     .state('homepage',{
      url:'/main_view',
      templateUrl: "views/main_view.html",
      controller: "hompageController"
    });


});
