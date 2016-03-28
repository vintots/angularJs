
angular.module('myApp.homepageController', [])
.controller('hompageController',function($state,$scope,Authenticate,isLoggedIn){
   isLoggedIn.checkerSession();
   var result_data = Authenticate.lists($scope);
   	
    result_data.then(function(success){

    	$scope.users=angular.copy(success.users);
    	// console.log(success.users);
    },function(fail){
          console.log('fail');
     });
   
   $scope.userLogOut =function(){
   		isLoggedIn.userLogOut();
   		$state.go('login');
   }
   $scope.Add_view=function(){
   	$state.go('AddUser');
   }
});