var url = "http://localhost/angular-v1-seed/";
angular.module('myApp.apiservices', ['myApp.apiRequest'])
    



.factory('ApiservicesUsers', function(apiRequest){
  return{
    getResource : function(position_id,callback_promise){

      return apiRequest.getResource("",callback_promise);
    }
  }
})

