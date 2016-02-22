myApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/view1");

  $stateProvider
    .state('view1',{
      url:'/view1',
      templateUrl: "views/view1.html",
      controller: "View1Ctrl"
    })
    .state('view2',{
      url:'/view2',
      templateUrl: "views/view2.html",
      controller: "View2Ctrl"
    });
});
