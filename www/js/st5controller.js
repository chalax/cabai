'use strict';

angular.module('starter.st5controller', [])

.controller('standar5Ctrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,$http) {
		 $scope.$parent.showHeader();
	    $scope.$parent.clearFabs();
	    $scope.isExpanded = true;
	    $scope.$parent.setExpanded(true);
	    $scope.$parent.setHeaderFab('right');
	    var idsubmisi = $stateParams.idsubmisi;

	    console.log(idsubmisi);

	    $timeout(function() {
	        ionicMaterialMotion.fadeSlideIn({
	            selector: '.animate-fade-slide-in .item'
	        });
	    }, 200);

	    // Activate ink for controller
	    getdata51($http,$scope,$stateParams);
	    getdata52($http,$scope,$stateParams);
	    getdata53($http,$scope,$stateParams);
	    getdata54($http,$scope,$stateParams);
	    getdata55($http,$scope,$stateParams);
	    getdata56($http,$scope,$stateParams);
	    getdata57($http,$scope,$stateParams);


	    ionicMaterialInk.displayEffect();




	    $scope.savefile = function(idfile){
	    	console.log("download this file: "+idfile);
	    }
});

function getdata55($http,$scope,$stateParams){
	var idsubmisi = $stateParams.idsubmisi;
	$http({
		method:"post",
		url:ajaxurl1+"getdata55",
		data:{"id_submission":idsubmisi},
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
	}).then(function(data){
			console.log(data);
			$scope.pembimbing = data.data;
	},function(err){	
		
	})
}
function getdata56($http,$scope,$stateParams){
	var idsubmisi = $stateParams.idsubmisi;
	$http({
		method:"post",
		url:ajaxurl1+"getdata56",
		data:{"id_submission":idsubmisi},
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
	}).then(function(data){
			console.log(data);
			$scope.pembimbingta = data.data;
	},function(err){	
		
	})
}
function getdata57($http,$scope,$stateParams){
	var idsubmisi = $stateParams.idsubmisi;
	$http({
		method:"post",
		url:ajaxurl1+"getdata57",
		data:{"id_submission":idsubmisi},
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
	}).then(function(data){
			console.log(data);
			$scope.keselamatankerja = data.data;
	},function(err){	
		
	})
}
function getdata51($http,$scope,$stateParams){
	var idsubmisi = $stateParams.idsubmisi;
	$http({
		method:"post",
		url:ajaxurl1+"getdata51",
		data:{"id_submission":idsubmisi},
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
	}).then(function(data){
			console.log(data);
			$scope.strukturkurikulum = data.data;
	},function(err){	
		
	})
}


function getdata52($http,$scope,$stateParams){
	var idsubmisi = $stateParams.idsubmisi;
	$http({
		method:"post",
		url:ajaxurl1+"getdata52",
		data:{"id_submission":idsubmisi},
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
	}).then(function(data){
			console.log(data);
			$scope.substansi = data.data;
	},function(err){	
		
	})
}

function getdata53($http,$scope,$stateParams){
	var idsubmisi = $stateParams.idsubmisi;
	$http({
		method:"post",
		url:ajaxurl1+"getdata53",
		data:{"id_submission":idsubmisi},
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
	}).then(function(data){
			console.log(data);
			$scope.contohsoalujian = data.data;
	},function(err){	
		
	})
}

function getdata54($http,$scope,$stateParams){
	var idsubmisi = $stateParams.idsubmisi;
	$http({
		method:"post",
		url:ajaxurl1+"getdata54",
		data:{"id_submission":idsubmisi},
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
	}).then(function(data){
			console.log(data);
			$scope.hasiltinjauan = data.data;
	},function(err){	
		
	})
}