// var myApp = angular.module('myApp.homepageController',[]); //ito (myApp.loginController) ung ilalagay mo sa app.js 

// myApp.controller('hompageController', ['$scope', function($scope) {
//   	$scope.hi="marvin";
	


// }]);


angular.module('myApp.homepageController', [])
.controller('hompageController',function($state,$scope,Authenticate){
   var result_data = Authenticate.lists($scope);

    result_data.then(function(success){
    	$scope.users=angular.copy(success.users);
    	console.log(success.users);
    },function(fail){
          console.log('fail');
     });
   
   
});