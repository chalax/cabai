/* global angular, document, window */
'use strict';


angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $timeout,$rootScope) {
    // Form data for the login modal
    $scope.loginData = {};
    $scope.isExpanded = false;
    $scope.hasHeaderFabLeft = false;
    $scope.hasHeaderFabRight = false;

    $rootScope.loginstatus = false;
    $rootScope.loggedinuserdata = null;

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }

    /////////////////////////////////////////
    //  Login Status Watch                 //
    /////////////////////////////////////////




    ////////////////////////////////////////
    // Layout Methods
    ////////////////////////////////////////

    $scope.hideNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
    };

    $scope.showNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
    };

    $scope.noHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }
    };

    $scope.setExpanded = function(bool) {
        $scope.isExpanded = bool;
    };

    $scope.setHeaderFab = function(location) {
        var hasHeaderFabLeft = false;
        var hasHeaderFabRight = false;

        switch (location) {
            case 'left':
                hasHeaderFabLeft = true;
                break;
            case 'right':
                hasHeaderFabRight = true;
                break;
        }

        $scope.hasHeaderFabLeft = hasHeaderFabLeft;
        $scope.hasHeaderFabRight = hasHeaderFabRight;
    };

    $scope.hasHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (!content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }

    };

    $scope.hideHeader = function() {
        $scope.hideNavBar();
        $scope.noHeader();
    };

    $scope.showHeader = function() {
        $scope.showNavBar();
        $scope.hasHeader();
    };

    $scope.clearFabs = function() {
        var fabs = document.getElementsByClassName('button-fab');
        if (fabs.length && fabs.length > 1) {
            fabs[0].remove();
        }
    };
})

.controller('LoginCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk,$http,$rootScope,$state) {
    $scope.$parent.clearFabs();
    $scope.loggingin = false;
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
    ionicMaterialInk.displayEffect();

    $rootScope.loggedinuserdata = null;
    $rootScope.loginstatus = false;

    $scope.datalogin={};

    $scope.performlogin = function(){
        console.log($rootScope.datalogin);
        $scope.loggingin = true;
        $http({
            method:"post",
            url: ajaxurl+"userauth",
            data:{"uname":$scope.datalogin.username,"psw":$scope.datalogin.password},
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function(result){
            var logindataresult = result.data[0];
            console.log(result);
            if(logindataresult.authencicated){
                $rootScope.loggedinuserdata = logindataresult;
                $rootScope.loginstatus = true;
                console.log($scope.loggedinuserdata);
                $state.go("app.beranda");
            }else{
                alert("login failed");
                $scope.loggingin = false;
            }
        },function(err){
          $scope.loggingin = false;
          alert("Login Failed");
            console.log(err);
        });
    }
})

.controller('FriendsCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab('left');

    // Delay expansion
    $timeout(function() {
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
    }, 300);

    // Set Motion
    ionicMaterialMotion.fadeSlideInRight();

    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('ProfileCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,$http,$rootScope) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    $http({
            method:"post",
            url: ajaxurl+"submissions",
            data:$rootScope.loggedinuserdata,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function(data){
            console.log(data);

            $scope.submissions = data.data;


    },function(err){
        console.log(err);
    });


    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink



    ionicMaterialInk.displayEffect();
})

.controller('detailajuanCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,$state) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab('right');
    $scope.idsubmisi = $stateParams.idsubmisi;

    $scope.gotodetailstandar = function(kadal,standar){
        console.log(kadal);
        switch(standar){
            case 3:
                $state.go("app.standar3",{idsubmisi:kadal});
                break;
            case 4:
                $state.go("app.standar4",{idsubmisi:kadal});
                break;
            case 5:
                $state.go("app.standar5",{idsubmisi:kadal});
                break;
            case 6:
                $state.go("app.standar6",{idsubmisi:kadal});
                break;
            case 7:
                $state.go("app.standar7",{idsubmisi:kadal});
                break;

        }

    }

    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();
})
.controller('standar3Ctrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,$http) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab('right');
    var idsubmisi = $stateParams.idsubmisi;
    getdata31();
    getdata32();
    getdata33();
    getdata34();
    getdata35();
    getdata36();
    getdata37();
    function getdata31(){
         $http({
            method:"post",
            url: ajaxurl+"getdata31",
            data:{"id_submission":idsubmisi},
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(data){
                console.log(data.data);
                var dtts4 = data.data[0];
                var dtts3 = data.data[1];
                var dtts2 = data.data[2];
                var dtts1 = data.data[3];
                var dtts0 = data.data[4];


                var colors = ['#cc5933','#cc8033','#cca633', '#cccc33', '#a6cc33', '#80cc33', '#59cc33', '#33cc33', '#33cc59', '#33cc80', '#33cca6', '#33cccc', '#33a6cc', '#3380cc', '#3359cc', '#3333cc'];




                $scope.daya_tampung = {

                  labels: [
                    "TS0",
                    "TS1",
                    "TS2",
                    "TS3",
                    "TS4"
                  ],
                  datasets: [
                        {
                            label: "Data Daya Tampung Mahasiswa",
                            backgroundColor:colors,
                            borderColor: colors,
                            borderWidth: 1,
                            data: [dtts0.daya_tampung,
                                    dtts1.daya_tampung,
                                    dtts2.daya_tampung,
                                    dtts3.daya_tampung,
                                    dtts4.daya_tampung]
                        }
                  ]
                };
                    $scope.ipk_max_lulusan_reguler = {

                                      labels: [
                                        "TS0",
                                        "TS1",
                                        "TS2",
                                        "TS3",
                                        "TS4"
                                      ],
                                      datasets: [
                                            {
                                                label: "Data IPK Max Lulusan Reguler",
                                                backgroundColor:colors,
                                                borderColor: colors,
                                                borderWidth: 1,
                                                data: [dtts0.ipk_max_lulusan_reguler,
                                                        dtts1.ipk_max_lulusan_reguler,
                                                        dtts2.ipk_max_lulusan_reguler,
                                                        dtts3.ipk_max_lulusan_reguler,
                                                        dtts4.ipk_max_lulusan_reguler]
                                            }
                                      ]
                                    };
                    $scope.ipk_min_lulusan_reguler = {

                                      labels: [
                                        "TS0",
                                        "TS1",
                                        "TS2",
                                        "TS3",
                                        "TS4"
                                      ],
                                      datasets: [
                                            {
                                                label: "Data IPK Max Lulusan Reguler",
                                                backgroundColor:colors,
                                                borderColor: colors,
                                                borderWidth: 1,
                                                data: [dtts0.ipk_min_lulusan_reguler,
                                                        dtts1.ipk_min_lulusan_reguler,
                                                        dtts2.ipk_min_lulusan_reguler,
                                                        dtts3.ipk_min_lulusan_reguler,
                                                        dtts4.ipk_min_lulusan_reguler]
                                            }
                                      ]
                                    };
                    $scope.ipk_rata_rata_lulusan_reguler = {

                                      labels: [
                                        "TS0",
                                        "TS1",
                                        "TS2",
                                        "TS3",
                                        "TS4"
                                      ],
                                      datasets: [
                                            {
                                                label: "Data IPK Rata-rata Lulusan Reguler",
                                                backgroundColor:colors,
                                                borderColor: colors,
                                                borderWidth: 1,
                                                data: [dtts0.ipk_rata_rata_lulusan_reguler,
                                                        dtts1.ipk_rata_rata_lulusan_reguler,
                                                        dtts2.ipk_rata_rata_lulusan_reguler,
                                                        dtts3.ipk_rata_rata_lulusan_reguler,
                                                        dtts4.ipk_rata_rata_lulusan_reguler]
                                            }
                                      ]
                                    };
                    $scope.jumlah_calon_mahasiswa_reguler_ikut_seleksi = {

                                      labels: [
                                        "TS0",
                                        "TS1",
                                        "TS2",
                                        "TS3",
                                        "TS4"
                                      ],
                                      datasets: [
                                            {
                                                label: "Jumlah Calon Mahasiswa Reguler Ikut Seleksi",
                                                backgroundColor:colors,
                                                borderColor: colors,
                                                borderWidth: 1,
                                                data: [dtts0.jumlah_calon_mahasiswa_reguler_ikut_seleksi,
                                                        dtts1.jumlah_calon_mahasiswa_reguler_ikut_seleksi,
                                                        dtts2.jumlah_calon_mahasiswa_reguler_ikut_seleksi,
                                                        dtts3.jumlah_calon_mahasiswa_reguler_ikut_seleksi,
                                                        dtts4.jumlah_calon_mahasiswa_reguler_ikut_seleksi]
                                            }
                                      ]
                                    };
                    $scope.jumlah_calon_mahasiswa_reguler_lulus_seleksi = {

                                      labels: [
                                        "TS0",
                                        "TS1",
                                        "TS2",
                                        "TS3",
                                        "TS4"
                                      ],
                                      datasets: [
                                            {
                                                label: "Jumlah Calon Mahasiswa Reguler Lulus Seleksi",
                                                backgroundColor:colors,
                                                borderColor: colors,
                                                borderWidth: 1,
                                                data: [dtts0.jumlah_calon_mahasiswa_reguler_lulus_seleksi,
                                                        dtts1.jumlah_calon_mahasiswa_reguler_lulus_seleksi,
                                                        dtts2.jumlah_calon_mahasiswa_reguler_lulus_seleksi,
                                                        dtts3.jumlah_calon_mahasiswa_reguler_lulus_seleksi,
                                                        dtts4.jumlah_calon_mahasiswa_reguler_lulus_seleksi]
                                            }
                                      ]
                                    };
                    $scope.jumlah_lulusan_reguler_non_transfer = {

                                      labels: [
                                        "TS0",
                                        "TS1",
                                        "TS2",
                                        "TS3",
                                        "TS4"
                                      ],
                                      datasets: [
                                            {
                                                label: "Jumlah Lulusan Reguler Non Transfer",
                                                backgroundColor:colors,
                                                borderColor: colors,
                                                borderWidth: 1,
                                                data: [dtts0.jumlah_lulusan_reguler_non_transfer,
                                                        dtts1.jumlah_lulusan_reguler_non_transfer,
                                                        dtts2.jumlah_lulusan_reguler_non_transfer,
                                                        dtts3.jumlah_lulusan_reguler_non_transfer,
                                                        dtts4.jumlah_lulusan_reguler_non_transfer]
                                            }
                                      ]
                                    };
                    $scope.jumlah_lulusan_reguler_transfer = {

                                      labels: [
                                        "TS0",
                                        "TS1",
                                        "TS2",
                                        "TS3",
                                        "TS4"
                                      ],
                                      datasets: [
                                            {
                                                label: "Jumlah Lulusan Reguler Transfer",
                                                backgroundColor:colors,
                                                borderColor: colors,
                                                borderWidth: 1,
                                                data: [dtts0.jumlah_lulusan_reguler_transfer,
                                                        dtts1.jumlah_lulusan_reguler_transfer,
                                                        dtts2.jumlah_lulusan_reguler_transfer,
                                                        dtts3.jumlah_lulusan_reguler_transfer,
                                                        dtts4.jumlah_lulusan_reguler_transfer]
                                            }
                                      ]
                                    };
                    $scope.jumlah_mahasiswa_baru_reguler_non_transfer = {

                                      labels: [
                                        "TS0",
                                        "TS1",
                                        "TS2",
                                        "TS3",
                                        "TS4"
                                      ],
                                      datasets: [
                                            {
                                                label: "Jumlah Mahasiswa Baru Reguler Non Transfer",
                                                backgroundColor:colors,
                                                borderColor: colors,
                                                borderWidth: 1,
                                                data: [dtts0.jumlah_mahasiswa_baru_reguler_non_transfer,
                                                        dtts1.jumlah_mahasiswa_baru_reguler_non_transfer,
                                                        dtts2.jumlah_mahasiswa_baru_reguler_non_transfer,
                                                        dtts3.jumlah_mahasiswa_baru_reguler_non_transfer,
                                                        dtts4.jumlah_mahasiswa_baru_reguler_non_transfer]
                                            }
                                      ]
                                    };
                    $scope.jumlah_mahasiswa_baru_reguler_transfer = {

                                      labels: [
                                        "TS0",
                                        "TS1",
                                        "TS2",
                                        "TS3",
                                        "TS4"
                                      ],
                                      datasets: [
                                            {
                                                label: "Jumlah Mahasiswa Baru Reguler Transfer",
                                                backgroundColor:colors,
                                                borderColor: colors,
                                                borderWidth: 1,
                                                data: [dtts0.jumlah_mahasiswa_baru_reguler_transfer,
                                                        dtts1.jumlah_mahasiswa_baru_reguler_transfer,
                                                        dtts2.jumlah_mahasiswa_baru_reguler_transfer,
                                                        dtts3.jumlah_mahasiswa_baru_reguler_transfer,
                                                        dtts4.jumlah_mahasiswa_baru_reguler_transfer]
                                            }
                                      ]
                                    };
                    $scope.jumlah_total_mahasiswa_reguler_non_transfer = {

                                      labels: [
                                        "TS0",
                                        "TS1",
                                        "TS2",
                                        "TS3",
                                        "TS4"
                                      ],
                                      datasets: [
                                            {
                                                label: "Total Mahasiswa Reguler Non Transfer",
                                                backgroundColor:colors,
                                                borderColor: colors,
                                                borderWidth: 1,
                                                data: [dtts0.jumlah_total_mahasiswa_reguler_non_transfer,
                                                        dtts1.jumlah_total_mahasiswa_reguler_non_transfer,
                                                        dtts2.jumlah_total_mahasiswa_reguler_non_transfer,
                                                        dtts3.jumlah_total_mahasiswa_reguler_non_transfer,
                                                        dtts4.jumlah_total_mahasiswa_reguler_non_transfer]
                                            }
                                      ]
                                    };
                    $scope.jumlah_total_mahasiswa_reguler_transfer = {

                                      labels: [
                                        "TS0",
                                        "TS1",
                                        "TS2",
                                        "TS3",
                                        "TS4"
                                      ],
                                      datasets: [
                                            {
                                                label: "Total Mahasiswa Reguler Transfer",
                                                backgroundColor:colors,
                                                borderColor: colors,
                                                borderWidth: 1,
                                                data: [dtts0.jumlah_total_mahasiswa_reguler_transfer,
                                                        dtts1.jumlah_total_mahasiswa_reguler_transfer,
                                                        dtts2.jumlah_total_mahasiswa_reguler_transfer,
                                                        dtts3.jumlah_total_mahasiswa_reguler_transfer,
                                                        dtts4.jumlah_total_mahasiswa_reguler_transfer]
                                            }
                                      ]
                                    };
                    $scope.persentase_lulusan_dengan_ipk_kurdar_275 = {

                                      labels: [
                                        "TS0",
                                        "TS1",
                                        "TS2",
                                        "TS3",
                                        "TS4"
                                      ],
                                      datasets: [
                                            {
                                                label: "Persentase Lulusan Dengan IPK < 2,75",
                                                backgroundColor:colors,
                                                borderColor: colors,
                                                borderWidth: 1,
                                                data: [dtts0.persentase_lulusan_dengan_ipk_kurdar_275,
                                                        dtts1.persentase_lulusan_dengan_ipk_kurdar_275,
                                                        dtts2.persentase_lulusan_dengan_ipk_kurdar_275,
                                                        dtts3.persentase_lulusan_dengan_ipk_kurdar_275,
                                                        dtts4.persentase_lulusan_dengan_ipk_kurdar_275]
                                            }
                                      ]
                                    };
                    $scope.persentase_lulusan_dengan_ipk_lbdr_350 = {

                                      labels: [
                                        "TS0",
                                        "TS1",
                                        "TS2",
                                        "TS3",
                                        "TS4"
                                      ],
                                      datasets: [
                                            {
                                                label: "Persentase Lulusan Dengan IPK > 3,50",
                                                backgroundColor:colors,
                                                borderColor: colors,
                                                borderWidth: 1,
                                                data: [dtts0.persentase_lulusan_dengan_ipk_lbdr_350,
                                                        dtts1.persentase_lulusan_dengan_ipk_lbdr_350,
                                                        dtts2.persentase_lulusan_dengan_ipk_lbdr_350,
                                                        dtts3.persentase_lulusan_dengan_ipk_lbdr_350,
                                                        dtts4.persentase_lulusan_dengan_ipk_lbdr_350]
                                            }
                                      ]
                                    };
                    $scope.persentase_lulusan_dengan_ipk_smd_275 = {

                                      labels: [
                                        "TS0",
                                        "TS1",
                                        "TS2",
                                        "TS3",
                                        "TS4"
                                      ],
                                      datasets: [
                                            {
                                                label: "Persentase Lulusan Dengan IPK = 2,75",
                                                backgroundColor:colors,
                                                borderColor: colors,
                                                borderWidth: 1,
                                                data: [dtts0.persentase_lulusan_dengan_ipk_smd_275,
                                                        dtts1.persentase_lulusan_dengan_ipk_smd_275,
                                                        dtts2.persentase_lulusan_dengan_ipk_smd_275,
                                                        dtts3.persentase_lulusan_dengan_ipk_smd_275,
                                                        dtts4.persentase_lulusan_dengan_ipk_smd_275]
                                            }
                                      ]
                                    };





                $scope.myOptions =  {
                  // Chart.js options go here
                  // e.g. Pie Chart Options http://www.chartjs.org/docs/#doughnut-pie-chart-chart-options
                };

                $scope.onChartClick = function (event) {
                  console.log(event);
                };


        },function(err){
            console.log(err);
        });

        $timeout(function() {
            ionicMaterialMotion.fadeSlideIn({
                selector: '.animate-fade-slide-in .item'
            });
        }, 200);
    }


    function getdata32(){
        $http({
            method:"post",
            url: ajaxurl+"getdatastandar32",
            data:{"id_submission":idsubmisi},
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(data){
                $scope.prestasis = data.data;

            },function(err){
                // console.log(err);
            });
    }

    function getdata33(){
        $scope.dt33 = 1;
         $http({
            method:"post",
            url: ajaxurl+"getdatastandar33",
            data:{"id_submission":idsubmisi},
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(data){
                console.log(data.data);
                var dtts4 = data.data[0];
                var dtts3 = data.data[1];
                var dtts2 = data.data[2];
                var dtts1 = data.data[3];
                var dtts0 = data.data[4];

                $scope.$watch('dt33',function(old,newval){
                    console.log($scope.dt33);
                });

                var colors = ['#cc5933','#cc8033','#cca633', '#cccc33', '#a6cc33', '#80cc33', '#59cc33', '#33cc33', '#33cc59', '#33cc80', '#33cca6', '#33cccc', '#33a6cc', '#3380cc', '#3359cc', '#3333cc'];




                $scope.datamahasiswaangkatan5tahunlalu = {

                  labels: [
                    "TS-4",
                    "TS-3",
                    "TS-2",
                    "TS-1",
                    "TS-0",
                    "Lulus"

                  ],
                  datasets: [
                        {
                            label: "Mahsiswa masuk tahun "+dtts4.thn_masuk,
                            backgroundColor:colors,
                            borderColor: colors,
                            borderWidth: 1,
                            data: [dtts4.data_ts_0,
                                    dtts4.data_ts_1,
                                    dtts4.data_ts_2,
                                    dtts4.data_ts_3,
                                    dtts4.data_ts_4,
                                    dtts4.jumlah_lulusan_sd_ts]
                        }
                  ],
                  options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero:true
                                }
                            }]
                        }
                    }
                };

                $scope.datamahasiswaangkatan4tahunlalu = {

                  labels: [
                    "TS-4",
                    "TS-3",
                    "TS-2",
                    "TS-1",
                    "TS-0",
                    "Lulus"

                  ],
                  datasets: [
                        {
                            label: "Mahsiswa masuk tahun "+dtts3.thn_masuk,
                            backgroundColor:colors,
                            borderColor: colors,
                            borderWidth: 1,
                            data: [dtts3.data_ts_0,
                                    dtts3.data_ts_1,
                                    dtts3.data_ts_2,
                                    dtts3.data_ts_3,
                                    dtts3.data_ts_4,
                                    dtts3.jumlah_lulusan_sd_ts]
                        }
                  ],
                  options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero:true
                                }
                            }]
                        }
                    }
                };

                $scope.datamahasiswaangkatan3tahunlalu = {

                  labels: [
                    "TS-4",
                    "TS-3",
                    "TS-2",
                    "TS-1",
                    "TS-0",
                    "Lulus"

                  ],
                  datasets: [
                        {
                            label: "Mahsiswa masuk tahun "+dtts2.thn_masuk,
                            backgroundColor:colors,
                            borderColor: colors,
                            borderWidth: 1,
                            data: [dtts2.data_ts_0,
                                    dtts2.data_ts_1,
                                    dtts2.data_ts_2,
                                    dtts2.data_ts_3,
                                    dtts2.data_ts_4,
                                    dtts2.jumlah_lulusan_sd_ts]
                        }
                  ],
                  options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero:true
                                }
                            }]
                        }
                    }
                };
                $scope.datamahasiswaangkatan2tahunlalu = {

                  labels: [
                    "TS-4",
                    "TS-3",
                    "TS-2",
                    "TS-1",
                    "TS-0",
                    "Lulus"

                  ],
                  datasets: [
                        {
                            label: "Mahsiswa masuk tahun "+dtts1.thn_masuk,
                            backgroundColor:colors,
                            borderColor: colors,
                            borderWidth: 1,
                            data: [dtts1.data_ts_0,
                                    dtts1.data_ts_1,
                                    dtts1.data_ts_2,
                                    dtts1.data_ts_3,
                                    dtts1.data_ts_4,
                                    dtts1.jumlah_lulusan_sd_ts]
                        }
                  ],
                  options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero:true
                                }
                            }]
                        }
                    }
                };

                $scope.datamahasiswaangkatan1tahunlalu = {

                  labels: [
                    "TS-4",
                    "TS-3",
                    "TS-2",
                    "TS-1",
                    "TS-0",
                    "Lulus"

                  ],
                  datasets: [
                        {
                            label: "Mahsiswa masuk tahun "+dtts0.thn_masuk,
                            backgroundColor:colors,
                            borderColor: colors,
                            borderWidth: 1,
                            data: [dtts0.data_ts_0,
                                    dtts0.data_ts_1,
                                    dtts0.data_ts_2,
                                    dtts0.data_ts_3,
                                    dtts0.data_ts_4,
                                    dtts0.jumlah_lulusan_sd_ts]
                        }
                  ],
                  options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero:true
                                }
                            }]
                        }
                    }
                };

                $scope.myOptions =  {
                  // Chart.js options go here
                  // e.g. Pie Chart Options http://www.chartjs.org/docs/#doughnut-pie-chart-chart-options
                  scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                };

                $scope.onChartClick = function (event) {
                  console.log(event);
                };

            },function(err){
                // console.log(err);
            });
    }
    // Activate ink for controller
    ionicMaterialInk.displayEffect();
    function getdata34(){
        $http({
                method:"post",
                url:ajaxurl+"getdatastandar34",
                data:{"id_submission":idsubmisi},
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}

                    }).then(function(data){
                        console.log(data.data);
                        $scope.pelayanan = data.data;
                    },function(err){
                        console.log(err);
                    });

    }

    function getdata35(){
        $http({
            method:"post",
            url:ajaxurl+"getdatastandar35",
            data:{"id_submission":idsubmisi},
            headers: {'Content-Type':'application/x-www-form-urlencoded'}
        }).then(function(data){
            console.log(data.data);
            $scope.usahausaha  = data.data;
        },function(err){
            console.log(err);
        });
    }

    function getdata36(){
        $http({
            method:"post",
            url:ajaxurl+"getdatastandar36",
            data:{"id_submission":idsubmisi},
            headers: {'Content-Type':'application/x-www-form-urlencoded'}
        }).then(function(data){
            console.log(data.data);
            var dt36a = data.data[0];
            var dt36b = data.data[1];
            var dt36c = data.data[2];
            var dt36d = data.data[3];
            var dt36e = data.data[4];
             var colors = ['#cc5933', '#80cc33', '#33cccc',  '#3333cc'];



            $scope.data36a = {
                 labels: [
                    "Sangat Baik",
                    "Baik",
                    "Cukup Baik",
                    "Kurang Baik"
                 ],

              datasets: [
                {
                  data: [
                    dt36a.persentase_tanggapan_sangat_baik,
                    dt36a.persentase_tanggapan_baik ,
                    dt36a.persentase_tanggapan_cukup ,
                    dt36a.persentase_tanggapan_kurang
                  ],
                  backgroundColor:colors,
                  hoverBackgroundColor: colors
                }
              ]
            };

            $scope.data36b = {
                 labels: [
                    "Sangat Baik",
                    "Baik",
                    "Cukup Baik",
                    "Kurang Baik"
                 ],

              datasets: [
                {
                  data: [
                    dt36b.persentase_tanggapan_sangat_baik,
                    dt36b.persentase_tanggapan_baik ,
                    dt36b.persentase_tanggapan_cukup ,
                    dt36b.persentase_tanggapan_kurang
                  ],
                  backgroundColor:colors,
                  hoverBackgroundColor: colors
                }
              ]
            };

            $scope.data36c = {
                 labels: [
                    "Sangat Baik",
                    "Baik",
                    "Cukup Baik",
                    "Kurang Baik"
                 ],

              datasets: [
                {
                  data: [
                    dt36c.persentase_tanggapan_sangat_baik,
                    dt36c.persentase_tanggapan_baik ,
                    dt36c.persentase_tanggapan_cukup ,
                    dt36c.persentase_tanggapan_kurang
                  ],
                  backgroundColor:colors,
                  hoverBackgroundColor: colors
                }
              ]
            };

            $scope.data36d = {
                 labels: [
                    "Sangat Baik",
                    "Baik",
                    "Cukup Baik",
                    "Kurang Baik"
                 ],

              datasets: [
                {
                  data: [
                    dt36d.persentase_tanggapan_sangat_baik,
                    dt36d.persentase_tanggapan_baik ,
                    dt36d.persentase_tanggapan_cukup ,
                    dt36d.persentase_tanggapan_kurang
                  ],
                  backgroundColor:colors,
                  hoverBackgroundColor: colors
                }
              ]
            };

            $scope.data36e = {
                 labels: [
                    "Sangat Baik",
                    "Baik",
                    "Cukup Baik",
                    "Kurang Baik"
                 ],

              datasets: [
                {
                  data: [
                    dt36e.persentase_tanggapan_sangat_baik,
                    dt36e.persentase_tanggapan_baik ,
                    dt36e.persentase_tanggapan_cukup ,
                    dt36e.persentase_tanggapan_kurang
                  ],
                  backgroundColor:colors,
                  hoverBackgroundColor: colors
                }
              ]
            };

            $scope.myOptions =  {
              // Chart.js options go here
              // e.g. Pie Chart Options http://www.chartjs.org/docs/#doughnut-pie-chart-chart-options
              animation: {
                duration: 500,
                easing: "easeOutQuart",
                onComplete: function () {
                  var ctx = this.chart.ctx;
                  ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
                  ctx.textAlign = 'center';
                  ctx.textBaseline = 'bottom';

                  this.data.datasets.forEach(function (dataset) {

                    for (var i = 0; i < dataset.data.length; i++) {
                      var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                          total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                          mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius)/2,
                          start_angle = model.startAngle,
                          end_angle = model.endAngle,
                          mid_angle = start_angle + (end_angle - start_angle)/2;

                      var x = mid_radius * Math.cos(mid_angle);
                      var y = mid_radius * Math.sin(mid_angle);

                      ctx.fillStyle = '#fff';

                      var percent = String(Math.round(dataset.data[i]/total*100)) + "%";
                      ctx.fillText(dataset.data[i], model.x + x, model.y + y);
                      // Display percent in another line, line break doesn't work for fillText
                      ctx.fillText(percent, model.x + x, model.y + y + 15);
                    }
                  });
                }
              }

            };

            $scope.onChartClick = function (event) {
              console.log(event);
            };

        },function(err){
            console.log(err);
        });
    }

    function getdata37(){
        $http({
            method:"post",
            url:ajaxurl+"getdatastandar37",
            data:{"id_submission":idsubmisi},
            headers: {'Content-Type':'application/x-www-form-urlencoded'}
        }).then(function(data){
            console.log(data.data);
            $scope.permintaan  = data.data;
        },function(err){
            console.log(err);
        });
    }
    function objectToArray(dt,option){
        var arr = dt;
        switch(option){
            case 0:
            arr = Object.keys(dt).map(function (key) { return dt[key]; });
            break;
            case 1:
            arr = Object.keys(dt);

        }
        return arr;

    }
})



.controller('GalleryCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab(false);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();

    ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });

});
