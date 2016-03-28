angular.module("myApp.User",[])
  .controller('User',function($q,$scope,$state,isLoggedIn){
  	 isLoggedIn.checkerSession();
  	var User={};
  	$scope.Add =function(){
  	    User={
  	    	'Username': $scope.Username,
  	    	'Password': $scope.Password,
  	    	'FirstName': $scope.FirstName,
  	    	'Surname': $scope.Surname
  	    }
  	     
  	}
  });