 angular.module('phavr.settings', [])
   .controller('settingsCtrl', function($scope, $http, $cordovaToast) {

     $scope.user = JSON.parse(window.localStorage.getItem('user'));

     /**
      * Description
      * @method saveSettings
      * @return 
      */
     $scope.saveSettings = function() {
       localStorage.setItem('user', JSON.stringify($scope.user));
       $http.post(
           localStorage.getItem('domain') + '/api/users/update',
           $scope.user)
         .success(function(data, status, headers, config) {
           if (ionic.Platform.isIOS() || ionic.Platform.isAndroid()) {
             $cordovaToast.showShortCenter('Your settings have been saved.');
           }
           return data;
         })
         .error(function(data, status, headers, config) {
           console.log('save settings error, ', data, status, headers, config);
         });
     };
   });