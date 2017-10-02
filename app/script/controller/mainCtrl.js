'use strict';
var myApp = angular.module('internshipApp', []);

myApp.controller('MainCtrl', function ($scope, $http, msgConstants, validationService) {
    var that = this;   
    that.fieldInvalidError = '';   
    var defaultData = {name: '', email: '', phone:'', github: '', current_location: '',
        blog: '', resume: '', intro: ''};
    var errorData = {name: '', email: '', phone: '', gethub: '', current_location: '',
        blog: '', resume: '', intro: ''};
    that.result = angular.copy(defaultData);
    that.error = angular.copy(errorData);
    that.showAlert = false;
    that.SuccessFailmessage = '';
    that.messageClass = '';
    that.status = '';

    that.onSubmitForm = function () {
        var data = {};
        var isValidParameter = false;
        data = {
            name: that.result.name,
            email: that.result.email,
            phone: that.result.phone,
            github: that.result.github,
            current_location: that.result.current_location,
            resume: that.result.resume,
            intro: that.result.intro,
            blog: that.result.blog,    
        }
        isValidParameter = checkValidation(data);
        if (isValidParameter) {
            postDataToserver(data);           
        }       
    }

    function checkValidation(obj) {
        that.error = angular.copy(errorData);
        for (var key in obj) {
            that.fieldInvalidError = '';
            var checkForValidInput = true;
            if (obj[key] == "" || obj[key] == null) {
                that.fieldInvalidError = key;
                that.error[that.fieldInvalidError] = "Field cannot be empty.";
                return false;
            }            
            else {
                if (obj[key] == undefined) {
                    that.fieldInvalidError = key;
                    that.error[that.fieldInvalidError] = "Enter valid Input.";
                    return false;
                } 
                else if(key == 'name'){
                    that.fieldInvalidError = key; 
                    checkForValidInput = validationService.checkNameValidation(obj[key]);
                }
                else if (key == 'phone') {
                    that.fieldInvalidError = key;
                    checkForValidInput = validationService.checkPhoneValidation(obj[key]);
                } else if (key == 'email') {
                    that.fieldInvalidError = key;
                    checkForValidInput = validationService.checkEmailValidation(obj[key]);
                } else if (key == 'github' || key == 'resume') {
                    that.fieldInvalidError = key;
                    checkForValidInput = validationService.checkUrlValidation(obj[key]);
                }
            }         
            if(checkForValidInput === false){
                 that.error[that.fieldInvalidError] = "Enter valid input.";
                 return false;
            }   
        }
        return true;
    } 
    
    function postDataToserver(data) {
        $http({
            method: "POST",
            url: "http://elpisdesign.com/apply.php",
            params: data,
        }).then(function(response) {  
            if(response.status ===  200){
                that.showAlert = true;
                that.SuccessFailmessage = "  Your Internship request saved successful";
                that.messageClass = 'alert-success';
                that.result = angular.copy(defaultData);
                that.status = 'Success';
                
            }
            else{
                that.showAlert = true;
                that.SuccessFailmessage = "  Data not Save on server!!!";
                that.messageClass = 'alert-danger';
                that.status = 'Error';
                that.result = angular.copy(defaultData);
            }
        });
        
        that.onCloseAlert = function () {
                that.showAlert = false;
        };
    }

});
