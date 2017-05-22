'use strict';


angular.module('starter.st4controller', [])

.controller('standar4Ctrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,$http) {
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
    	getdata41($http,$scope,$stateParams);
    	getdata42($http,$scope,$stateParams);
    	getdata43($http,$scope,$stateParams);
    	getdata44($http,$scope,$stateParams);
    	getdata45($http,$scope,$stateParams);
    	getdata46($http,$scope,$stateParams);
    	getdata47($http,$scope,$stateParams);
    	getdata48($http,$scope,$stateParams);
    	getdata49($http,$scope,$stateParams);
    	getdata410($http,$scope,$stateParams);

    ionicMaterialInk.displayEffect();
});
function getdata44($http,$scope,$stateParams){
	var idsubmisi = $stateParams.idsubmisi;
	$http({
		method:"post",
		url:ajaxurl+"getdata44",
		data:{"id_submission":idsubmisi},
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
	}).then(function(data){
			console.log(data);
			$scope.dataajar44 = data.data;
	},function(err){
    console.log(err);
	})
}
function getdata45($http,$scope,$stateParams){
	var idsubmisi = $stateParams.idsubmisi;
	$http({
		method:"post",
		url:ajaxurl+"getdata45",
		data:{"id_submission":idsubmisi},
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
	}).then(function(data){
			console.log(data);
			$scope.dataajar45 = data.data;
	},function(err){
    console.log(err);
	})
}
function getdata410($http,$scope,$stateParams){
	var idsubmisi = $stateParams.idsubmisi;
	$http({
		method:"post",
		url:ajaxurl+"getdata410",
		data:{"id_submission":idsubmisi},
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
	}).then(function(data){
			console.log(data);
			$scope.peningkatandosen = data.data;
	},function(err){

	})
}
function getdata49($http,$scope,$stateParams){
	var idsubmisi = $stateParams.idsubmisi;
	$http({
		method:"post",
		url:ajaxurl+"getdata49",
		data:{"id_submission":idsubmisi},
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
	}).then(function(data){
			console.log(data);
			$scope.seminartenagaahli = data.data;
	},function(err){

	})
}
function getdata41($http,$scope,$stateParams){
	var idsubmisi = $stateParams.idsubmisi;
	$http({
		method:"post",
		url:ajaxurl+"getdatastandar41",
		data:{"id_submission":idsubmisi},
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
	}).then(function(data){
			console.log(data);
			$scope.datadosen = data.data;
	},function(err){

	})
}
function getdata42($http,$scope,$stateParams){
	var idsubmisi = $stateParams.idsubmisi;
	$http({
		method:"post",
		url:ajaxurl+"getdatastandar42",
		data:{"id_submission":idsubmisi},
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
	}).then(function(data){
			console.log(data);
			$scope.datadosensesuaibidangps = data.data;
	},function(err){

	})
}

function getdata43($http,$scope,$stateParams){
	var idsubmisi = $stateParams.idsubmisi;
	$http({
		method:"post",
		url:ajaxurl+"getdatastandar43",
		data:{"id_submission":idsubmisi},
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
	}).then(function(data){
			console.log(data);
			$scope.dataajar1 = data.data;
	},function(err){

	})
}
//////////////////////////////////////////////
// DATA 44 - 45 Skipped					//////
// TOO COMPLEX FOR THIS MOMENT			//////
//////////////////////////////////////////////
function getdata46($http,$scope,$stateParams){
	var idsubmisi = $stateParams.idsubmisi;
	$http({
		method:"post",
		url:ajaxurl+"getdata46",
		data:{"id_submission":idsubmisi},
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
	}).then(function(data){
			console.log(data);
			$scope.dataajardosentidaktetap = data.data;
	},function(err){

	})
}
function getdata47($http,$scope,$stateParams){
	var idsubmisi = $stateParams.idsubmisi;
	$http({
		method:"post",
		url:ajaxurl+"getdatastandar47",
		data:{"id_submission":idsubmisi},
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
	}).then(function(data){
			console.log(data);
			$scope.datadosentt = data.data;
	},function(err){

	})
}
function getdata48($http,$scope,$stateParams){
	var idsubmisi = $stateParams.idsubmisi;
	$http({
		method:"post",
		url:ajaxurl+"getdata48",
		data:{"id_submission":idsubmisi},
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
	}).then(function(data){
			console.log(data);
			$scope.dataajardtt = data.data;
	},function(err){

	})
}
