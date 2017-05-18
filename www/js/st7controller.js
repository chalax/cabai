'use strict';

angular.module('starter.st7controller', [])

.controller('standar7Ctrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,$http) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab('right');
    var idsubmisi = $stateParams.idsubmisi;



    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);

      getdata711($http,$scope,$stateParams);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();
});

function getdata711($http,$scope,$stateParams){
    var idsubmisi = $stateParams.idsubmisi;
    $http({
  		method:"post",
  		url:ajaxurl1+"getdata711",
  		data:{"id_submission":idsubmisi},
          headers: {'Content-Type':'application/x-www-form-urlencoded'}
  	}).then(function(data){
  			console.log(data);
  			$scope.data711 = data.data;

  	},function(err){

  	});
}
