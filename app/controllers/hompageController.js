var myApp = angular.module('myApp.homepageController',[]); //ito (myApp.loginController) ung ilalagay mo sa app.js 

myApp.controller('hompageController', ['$scope', function($scope) {
  	$scope.hi="marvin";
	


}]);


angular.module('myApp.homepageController', [])
.controller('hompageController',function($state,$scope){
   
   $scope.hi="marvin";
   
});