var url = "http://localhost/angular-v1-seed/";
angular.module('myApp.apiservices', [])
    



.factory('ApiservicesUsers', function(apiRequest){
  return{
    getResource : function(position_id,callback_promise){
    	// console.log(position_id);
      return apiRequest.getResource(position_id,callback_promise);
    }
  }
})

.factory('validateUserLogin', function(apiRequest){
  return{
    getResource : function(data,callback_promise){
    	// console.log(position_id);
      return apiRequest.getResource(data,callback_promise);
    }
  }
})

