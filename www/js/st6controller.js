'use strict';

angular.module('starter.st6controller', [])

.controller('standar6Ctrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,$http) {
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
	    getdata61($http,$scope,$stateParams);
			getdata62($http,$scope,$stateParams);
			getdata63($http,$scope,$stateParams);
			getdata64($http,$scope,$stateParams);
			getdata65($http,$scope,$stateParams);
			getdata66($http,$scope,$stateParams);
			getdata67($http,$scope,$stateParams);
			getdata68($http,$scope,$stateParams);
	    getdata69($http,$scope,$stateParams);


	    ionicMaterialInk.displayEffect();





});

function getdata68($http,$scope,$stateParams){
	var idsubmisi = $stateParams.idsubmisi;

	$http({
		method:"post",
		url:ajaxurl1+"getdata68",
		data:{"id_submission":idsubmisi},
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
	}).then(function(data){
			console.log(data);
			$scope.pustaka68 = data.data;

	},function(err){

	});
}
function getdata69($http,$scope,$stateParams){
	var idsubmisi = $stateParams.idsubmisi;

	$http({
		method:"post",
		url:ajaxurl1+"getdata69",
		data:{"id_submission":idsubmisi},
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
	}).then(function(data){
			console.log(data);
			$scope.peralatan69 = data.data;

	},function(err){

	});
}
function getdata63($http,$scope,$stateParams){
	var idsubmisi = $stateParams.idsubmisi;

	$http({
		method:"post",
		url:ajaxurl1+"getdata63",
		data:{"id_submission":idsubmisi},
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
	}).then(function(data){
			console.log(data);
			$scope.danakegiatan63 = data.data;

	},function(err){

	});
}

function getdata64($http,$scope,$stateParams){
	var idsubmisi = $stateParams.idsubmisi;

	$http({
		method:"post",
		url:ajaxurl1+"getdata64",
		data:{"id_submission":idsubmisi},
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
	}).then(function(data){
			console.log(data);
			$scope.danakegiatan64 = data.data;

	},function(err){

	});
}
function getdata65($http,$scope,$stateParams){
	var idsubmisi = $stateParams.idsubmisi;

	$http({
		method:"post",
		url:ajaxurl1+"getdata65",
		data:{"id_submission":idsubmisi},
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
	}).then(function(data){
			console.log(data);
			$scope.prasarana65 = data.data;

	},function(err){

	});
}
function getdata66($http,$scope,$stateParams){
	var idsubmisi = $stateParams.idsubmisi;

	$http({
		method:"post",
		url:ajaxurl1+"getdata66",
		data:{"id_submission":idsubmisi},
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
	}).then(function(data){
			console.log(data);
			$scope.prasarana66 = data.data;

	},function(err){

	});
}

function getdata67($http,$scope,$stateParams){
	var idsubmisi = $stateParams.idsubmisi;

	$http({
		method:"post",
		url:ajaxurl1+"getdata67",
		data:{"id_submission":idsubmisi},
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
	}).then(function(data){
			console.log(data);
			$scope.prasarana67 = data.data;

	},function(err){

	});
}

function getdata62($http,$scope,$stateParams){
var idsubmisi = $stateParams.idsubmisi;
var colors = ['#cca633', '#cccc33', '#a6cc33'];
	$scope.dt62select = {};
	var alldata = null;
	$http({
		method:"post",
		url:ajaxurl1+"getdata62",
		data:{"id_submission":idsubmisi},
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
	}).then(function(data){
			console.log(data);
			alldata = data.data;

	},function(err){

	});


	$scope.$watch('dt62select.jenisdana',function(lama,baru){
		// console.log(baru);
		if(alldata!=null){
			$scope.datadana62 = alldata[$scope.dt62select.jenisdana];

		}

	});
	$scope.$watch('dt62select.datadana',function(lama,baru){
		// console.log(baru);
		if(alldata!=null){
			$scope.datadana62 = alldata[$scope.dt62select.jenisdana];
			$scope.datacart62 = {

                                      labels: [
                                        "TH-2",
                                        "TH-1",
                                        "TH-0"
                                      ],
                                      datasets: [
                                            {
                                                label: alldata[$scope.dt62select.jenisdana][$scope.dt62select.datadana].jenis_penggunaan,
                                                backgroundColor:colors,
                                                borderColor: colors,
                                                borderWidth: 1,
                                                data: [alldata[$scope.dt62select.jenisdana][$scope.dt62select.datadana].presentaseth2,
                                                        alldata[$scope.dt62select.jenisdana][$scope.dt62select.datadana].presentaseth1,
                                                        alldata[$scope.dt62select.jenisdana][$scope.dt62select.datadana].presentaseth0]
                                            }
                                      ]
                                    };





                $scope.myOptions =  {
                  // Chart.js options go here
                  // e.g. Pie Chart Options http://www.chartjs.org/docs/#doughnut-pie-chart-chart-options
                };
		}

	});




}

function getdata61($http,$scope,$stateParams){
	var idsubmisi = $stateParams.idsubmisi;
	var datacollection = null;
	$scope.dt61 = {};

	$http({
		method:"post",
		url:ajaxurl1+"getdata61",
		data:{"id_submission":idsubmisi},
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
	}).then(function(data){
			console.log(data);
			$scope.realisasiperolehandana = data.data;
			datacollection = data.data;
	},function(err){

	});

	$scope.$watch('dt61.select',function(odval,newval){
		var colors = ['#cca633', '#cccc33', '#a6cc33'];
		if(datacollection!=null){
			console.log(datacollection[$scope.dt61.select].jenis_dana);

			$scope.realisasiperolehandanagrapik = {

                                      labels: [
                                        "TH-2",
                                        "TH-1",
                                        "TH-0"
                                      ],
                                      datasets: [
                                            {
                                                label: datacollection[$scope.dt61.select].sumber_dana,
                                                backgroundColor:colors,
                                                borderColor: colors,
                                                borderWidth: 1,
                                                data: [datacollection[$scope.dt61.select].jumlah_dana_th2,
                                                        datacollection[$scope.dt61.select].jumlah_dana_th1,
                                                        datacollection[$scope.dt61.select].jumlah_dana_th0]
                                            }
                                      ]
                                    };





                $scope.myOptions =  {
                  // Chart.js options go here
                  // e.g. Pie Chart Options http://www.chartjs.org/docs/#doughnut-pie-chart-chart-options
                };

		}else{
			console.log("");

			$scope.realisasiperolehandanagrapik = {

                                      labels: [
                                        "TH-2",
                                        "TH-1",
                                        "TH-0"
                                      ],
                                      datasets: [
                                            {
                                                label: "null",
                                                backgroundColor:colors,
                                                borderColor: colors,
                                                borderWidth: 1,
                                                data: [0,0,0]
                                            }
                                      ]
                                    };





                $scope.myOptions =  {
                  // Chart.js options go here
                  // e.g. Pie Chart Options http://www.chartjs.org/docs/#doughnut-pie-chart-chart-options
                };

		}


	})

}
