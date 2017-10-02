"use strict";
var myApp = angular.module('internshipApp', []);
        myApp.service('UtilityService', function ($http, myConfig, $window, $rootScope, $location) {
            var self = this;
            self._postAjaxCall = function (actionName, param, callback) {
//                $rootScope.$emit('hideloader');
//                $rootScope.$emit('showloader');
//                var tS = new Date().getTime();
//                if (typeof param === "undefined") {
//                    param = {};
//                }
//                param['ts'] = tS;
//                

                $http({
                    method: 'POST',
                    dataType: 'json',
                    async: false,
                    url: actionName,
                    timeout: 15000,
                    crossDomain: true
                }).then(function successCallback(result) {
                    $rootScope.$emit('hideloader');
                    console.log(result);
                    if (result.data.respCode == 107) {
                      $rootScope.loginSuccess = false;
                           $location.path('login');
                    } else {
                        callback(result.data);
                    }
                }, function errorCallback(e) {
                    $rootScope.$emit('hideloader');
                });
            };


            

        });




























////"use strict";
//angular.module('adminFantasyApp').
//        factory('UtilityService', function ($http, myConfig) {
//            return {               
//                getSideMenuList: function (data, callback) {
//                    $http.post(myConfig.websiteUrl + '/roles/attributes', data, {}).success(function (respData) {
//                        callback(respData);
//                    });
//                },
//                loginRequest: function (data, callback) {
//                    $http.post(myConfig.websiteUrl + '/admin/login', data, {}).success(function (respData) {
//                        callback(respData);
//                    }).error(function (data, status, headers, config) {
//                        callback({resCode: 502, message: 'Server is temporarly down.'});
//                    });
//                },
//                validateToken: function (data, callback) {
//                    $http.post(myConfig.websiteUrl + '/admin/validate/token', data, {}).success(function (respData) {
//                        callback(respData);
//                    }).error(function (data, status, headers, config) {
//                        callback({resCode: 502});
//                    });
//                },
//                logoutRequest: function (data, callback) {
//                    $http.post(myConfig.websiteUrl + '/admin/logout', data).success(function (respData) {
//                        callback(respData);
//                    });
//                },
//                getServerTime: function (callback) {
//                    $http.get(myConfig.websiteUrl + '/server_time').success(function (respTime) {
//                        callback(respTime);
//                    });
//                },
//                
//                changePassword : function (data, callback){
//                    $http.post(myConfig.websiteUrl + '/admin/change/password', data, {}).success(function (respData) {
//                        callback(respData);
//                    });
//                },
//                
//                getPendingPancardList : function (callback){
//                    $http.post(myConfig.websiteUrl + '/users/pancard/list').success(function (respData) {
//                        callback(respData);
//                    });
//                },
//                
//                verifyPancard : function (data, callback){
//                    $http.post(myConfig.websiteUrl + '/users/pancard/approve', data, {}).success(function (respData) {
//                        callback(respData);
//                    });
//                },
//                
//                getPendingDocList : function (callback){
//                    $http.post(myConfig.websiteUrl + '/users/bank/list').success(function (respData) {
//                        callback(respData);
//                    });
//                },
//                
//                verifyDocument : function (data, callback){
//                    $http.post(myConfig.websiteUrl + '/users/bank/approve', data, {}).success(function (respData) {
//                        callback(respData);
//                    });
//                },              
//
//            };
//
//
//
//        });
