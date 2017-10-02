/* global angular, document, window */
'use strict';

var userUUID = '';
var userDetail = {};
angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $timeout,$rootScope,$firebaseAuth,$state) {

    var auth = $firebaseAuth();

    auth.$onAuthStateChanged(function(firebaseUser) {
      $scope.firebaseUser = firebaseUser;
      if(firebaseUser!=null){
        $state.go("app.beranda")
        userUUID = firebaseUser.uid;
        userDetail = firebaseUser;
      }else{
        $state.go("app.login");
      }
      console.log(firebaseUser);
    });
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

    $scope.logout = function(){
        $firebaseAuth().$signOut();
    }
})

.controller('LoginCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk,$http,$rootScope,$state,$firebaseAuth) {
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
        $firebaseAuth().$signInWithEmailAndPassword($scope.datalogin.username,$scope.datalogin.password).then(function(){
            console.log("login success");
        }).catch(function(err){
            console.log(err);
            $scope.message = err.message;
        })
    }
    $scope.gotoregister = function(){
        $state.go("app.register");
    }

    // $scope.loginwith = function(profiver){
    //     $firebaseAuth().$signInWithPopup(profiver).then(function(result) {
    //       console.log("Signed in as:", result.user.uid);
    //     }).catch(function(error) {
    //       console.error("Authentication failed:", error);
    //     });
    // }
})
.controller("RegisterCtrl",function($scope,$firebaseAuth,$timeout, $stateParams, ionicMaterialInk){
    $scope.$parent.clearFabs();
    $scope.loggingin = false;
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
    ionicMaterialInk.displayEffect();
    $scope.register = function(registerData){
        console.log(registerData);

        $firebaseAuth().$createUserWithEmailAndPassword(registerData.email,registerData.password).then(function(firebaseUser) {
              console.log("Signed in as:", firebaseUser.uid);
              var user = firebase.auth().currentUser;
              // var userRef = firebase.database().ref("/users");
              // var userdata = [];
              // userdata['displayName'] = registerData.name;
              // userRef.push(userdata).then(function(scalb){
              //   console.log(scalb);
              // },function(err){
              //   console.log(err);
              // })
                user.updateProfile({
                  displayName: registerData.name,
                  
                }).then(function() {
                  // Update successful.
                }).catch(function(error) {
                  // An error happened.
                });
            }).catch(function(error) {
              console.error(error);
              $scope.message=error.message;
            });
    }


})
.controller("NewArtikelCtrl",function($scope,$timeout,ionicMaterialInk,ionicMaterialMotion,$firebaseAuth){
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
    $scope.isnew = true;
    var idartikel = null;
    $scope.newartikel = {};
    // $scope.newartikel.penulis = $firebaseAuth.currentUser.uid;

    $scope.postArtikel = function(){
        var userUid = firebase.auth().currentUser.uid;
        var userdisplayName = firebase.auth().currentUser.displayName;

        var artikelRef = firebase.database().ref("/artikel/");
        $scope.newartikel.penulis = userUid;
        $scope.newartikel.namaPenulis = userdisplayName;
        artikelRef.push($scope.newartikel).then(function(succallback){
            console.log(succallback.key);
            idartikel=succallback.key;
            $scope.isnew=false;
        },function(err){
            console.log(err);
        })
    }

    $scope.updateArtikel = function(){
        var userUid = firebase.auth().currentUser.uid;
        var artikelRef = firebase.database().ref("/artikel/");
        $scope.newartikel.penulis = userUid;
        artikelRef.child(idartikel).update($scope.newartikel).then(function(succallback){
            
        },function(err){
            console.log(err);
        })
    }



})
.controller("DetailArtikelCtrl",function($scope,$timeout,ionicMaterialInk,ionicMaterialMotion,$firebaseAuth,$stateParams,$firebaseArray){
    $scope.$parent.showHeader(false);
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab('none');

    // Delay expansion
    $timeout(function() {
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
    }, 300);


    var idartikel = $stateParams.idartikel;
    var artikelRef = firebase.database().ref('artikel');

    if(firebase.auth!=null){
        $scope.authdtuid=firebase.auth().currentUser.uid;
    }



    var artikelArray = $firebaseArray(artikelRef);
    var commentArray = $firebaseArray(artikelRef.child(idartikel).child("komentar"));
    $scope.komens = commentArray;
    commentArray.$loaded(function(comments){
        console.log(comments)
        $scope.komens = comments;
    })
    artikelArray.$loaded(function(dd){
        var artikelarrayreference = artikelArray.$indexFor(idartikel);
        $scope.artikel=dd[artikelarrayreference];
        console.log(dd[artikelarrayreference]);
        
    }).catch(function(rr){
        console.log(rr);
    })
    $scope.sayakomen={};
    $scope.kirimkomentar = function(kom){
        console.log(kom.komentar);
        var userUid = firebase.auth().currentUser.uid;
        var userdisplayName = firebase.auth().currentUser.displayName;
        var datakomen = {};

        
        datakomen.komentatorid= userUid;
        datakomen.displayName= userdisplayName;
        datakomen.kometar = kom.komentar;
        artikelRef.child(idartikel).child("komentar").push(datakomen).then(function(succallback){
            $scope.sayakomen.komentar='kadal';
            $scope.sayakomen = {};
            $scope.$apply();
        },function(err){
            console.log(err);
        })
    }


    // Set Motion
    ionicMaterialMotion.fadeSlideInRight();

    // Set Ink
    ionicMaterialInk.displayEffect();


})

.controller('RuangDiskusiCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion,$firebaseArray,$ionicScrollDelegate) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab('left');

    // Delay expansion
    $timeout(function() {
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
    }, 300);

    var chatRef = firebase.database().ref("/diskusi");
    var chatArray = $firebaseArray(chatRef);
    $scope.diskusi = chatArray;
    $scope.pesan = {};
    $scope.userid = userUUID;
    chatArray.$loaded(function(hs){
        $ionicScrollDelegate.scrollBottom(true);
        $ionicScrollDelegate.resize();
    })
    $scope.kirimpesan = function(pesan){
        pesan.userid = userUUID;
        pesan.penulis = userDetail.displayName;
        pesan.waktu = firebase.database.ServerValue.TIMESTAMP;
        chatArray.$add(pesan).then(function(succ){
            console.log(succ);
            $scope.pesan={};
            $ionicScrollDelegate.scrollBottom(true);
        },function(err){
            console.log(err);
        })

        
    }

    // Set Motion
    ionicMaterialMotion.fadeSlideInRight();

    // Set Ink
    ionicMaterialInk.displayEffect();
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

.controller('BerandaCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,$http,$rootScope,$firebaseArray) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);
        var artikelRef = firebase.database().ref("artikel");
        var artikelArray = $firebaseArray(artikelRef);
        artikelArray.$loaded().then(function(hsl){
            $scope.artikel= hsl;
            performanimationpage();
        }).catch(function(err){
            console.log(err);
        })


    function performanimationpage(){
      if($scope.dataloaded){
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
      }
    }

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
