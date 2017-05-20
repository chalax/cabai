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
    getdata721($http,$scope,$stateParams);
    getdata722($http,$scope,$stateParams);
    getdata73($http,$scope,$stateParams);
    getdata74($http,$scope,$stateParams);
    getdata75($http,$scope,$stateParams);
    getdata76($http,$scope,$stateParams);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();
});
function getdata73($http,$scope,$stateParams){
  var idsubmisi = $stateParams.idsubmisi;
  $http({
    method:"post",
    url:ajaxurl1+"getdata73",
    data:{"id_submission":idsubmisi},
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
  }).then(function(data){
      console.log(data);
      $scope.karya73 = data.data;

  },function(err){

  });
}
function getdata75($http,$scope,$stateParams){
  var idsubmisi = $stateParams.idsubmisi;
  $http({
    method:"post",
    url:ajaxurl1+"getdata75",
    data:{"id_submission":idsubmisi},
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
  }).then(function(data){
      console.log(data);
      $scope.instansidaln75 = data.data;

  },function(err){

  });
}
function getdata76($http,$scope,$stateParams){
  var idsubmisi = $stateParams.idsubmisi;
  $http({
    method:"post",
    url:ajaxurl1+"getdata76",
    data:{"id_submission":idsubmisi},
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
  }).then(function(data){
      console.log(data);
      $scope.instansilun76 = data.data;

  },function(err){

  });
}
function getdata721($http,$scope,$stateParams){
  var idsubmisi = $stateParams.idsubmisi;
  $http({
    method:"post",
    url:ajaxurl1+"getdata721",
    data:{"id_submission":idsubmisi},
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
  }).then(function(data){
      console.log(data);
      $scope.karilm721 = data.data;

  },function(err){

  });
}
function getdata722($http,$scope,$stateParams){
  var idsubmisi = $stateParams.idsubmisi;
  $http({
    method:"post",
    url:ajaxurl1+"getdata722",
    data:{"id_submission":idsubmisi},
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
  }).then(function(data){
      console.log(data);
      $scope.buku722 = data.data;
  },function(err){

  });
}

function getdata711($http,$scope,$stateParams){
    var idsubmisi = $stateParams.idsubmisi;
    var datacollection = null;
    $scope.dt71 = {};

    $http({
  		method:"post",
  		url:ajaxurl1+"getdata711",
  		data:{"id_submission":idsubmisi},
          headers: {'Content-Type':'application/x-www-form-urlencoded'}
  	}).then(function(data){
  			console.log(data);
  			$scope.penelitian71 = data.data;
        datacollection = data.data;
  	},function(err){

  	});

    $scope.$watch('dt71.select',function(){
      var colors = ['#cca633', '#cccc33', '#a6cc33'];
      if(datacollection!=null){
        console.log(datacollection[$scope.dt71.select].sumber_pembiayaan);

        $scope.datapenelitian71 = {

                                        labels: [
                                          "TH-2",
                                          "TH-1",
                                          "TH-0"
                                        ],
                                        datasets: [
                                              {
                                                  label: datacollection[$scope.dt71.select].sumber_pembiayaan,
                                                  backgroundColor:colors,
                                                  borderColor: colors,
                                                  borderWidth: 1,
                                                  data: [datacollection[$scope.dt71.select].ts_2,
                                                          datacollection[$scope.dt71.select].ts_1,
                                                          datacollection[$scope.dt71.select].ts_0]
                                              }
                                        ]
                                      };
                    $scope.myOptions =  {
                    // Chart.js options go here
                    // e.g. Pie Chart Options http://www.chartjs.org/docs/#doughnut-pie-chart-chart-options
                  };

      }else{
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
                                      }
                  $scope.myOptions =  {
                    // Chart.js options go here
                    // e.g. Pie Chart Options http://www.chartjs.org/docs/#doughnut-pie-chart-chart-options
                  };
      }
    });
}
function getdata74($http,$scope,$stateParams){
    var idsubmisi = $stateParams.idsubmisi;
    var datacollection = null;
    $scope.dt74 = {};

    $http({
  		method:"post",
  		url:ajaxurl1+"getdata74",
  		data:{"id_submission":idsubmisi},
          headers: {'Content-Type':'application/x-www-form-urlencoded'}
  	}).then(function(data){
  			console.log(data);
  			$scope.jumlahkegiatan74 = data.data;
        datacollection = data.data;
  	},function(err){

  	});

    $scope.$watch('dt74.select',function(){
      var colors = ['#cca633', '#cccc33', '#a6cc33'];
      if(datacollection!=null){
        console.log(datacollection[$scope.dt74.select].sumber_dana);

        $scope.datakegiatan74 = {

                                        labels: [
                                          "TH-2",
                                          "TH-1",
                                          "TH-0"
                                        ],
                                        datasets: [
                                              {
                                                  label: datacollection[$scope.dt74.select].sumber_pembiayaan,
                                                  backgroundColor:colors,
                                                  borderColor: colors,
                                                  borderWidth: 1,
                                                  data: [datacollection[$scope.dt74.select].ts_2,
                                                          datacollection[$scope.dt74.select].ts_1,
                                                          datacollection[$scope.dt74.select].ts_0]
                                              }
                                        ]
                                      };
                    $scope.myOptions =  {
                    // Chart.js options go here
                    // e.g. Pie Chart Options http://www.chartjs.org/docs/#doughnut-pie-chart-chart-options
                  };

      }else{
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
                                      }
                  $scope.myOptions =  {
                    // Chart.js options go here
                    // e.g. Pie Chart Options http://www.chartjs.org/docs/#doughnut-pie-chart-chart-options
                  };
      }
    });
}
