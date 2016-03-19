// var eleksyon_server = "http://192.168.99.100:32768/";
var eleksyon_server ="http://localhost:7700/";
angular.module('myApp.apiRequest',[])

.config(['$httpProvider', function ($httpProvider) {
  // Intercept POST requests, convert to standard form encoding
  $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
  $httpProvider.defaults.transformRequest.unshift(function (data, headersGetter) {
    var key, result = [];

    if (typeof data === "string")
      return data;

    for (key in data) {
      if (data.hasOwnProperty(key))
        result.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
    }
    return result.join("&");
  });
}])

.factory('apiRequest',function($q,$resource,$timeout){

  function _getResource(url,callback_promise){
    // $timeout(function() {
    //     console.log('aborting..');
    //     callback_promise.resolve('timeout');
    // }, 10000);

    return $resource(
        eleksyon_server + url , {},
        {
          save: {
            method:'POST',
            isArray: false,
            timeout: callback_promise.promise
          },
          get: {
            method:'GET',
            isArray: false,
            timeout: callback_promise.promise
          }
        }
    );
    // return resource;
  }

  // function getResourceOnly(url){
  //   return $resource(server + url);
  // }

  return {
      getResource: function (url,callback_promise) {
        return _getResource(url,callback_promise);
      }

      // getResourceOnly: function(url){
      //   return getResourceOnly(url);
      // }

    };
})
