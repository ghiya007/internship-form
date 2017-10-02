'use strict';
angular.module('internshipApp')
        .service('validationService', function () {
            var that = this;
            var phonenoRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
            var urlRegex = '^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$';
            var emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            var nameRegex =  "^[a-zA-Z]+[\-'\s]?[a-zA-Z ]+$";
            
            
            //Check Phone No. Validation.
            that.checkPhoneValidation = function (phone) {
                if (phonenoRegex.test(phone)) {
                     return true;
                } else {
                     return false;
                }

            }

            //Check Email Validations
            that.checkEmailValidation = function (email) {
                if (email.match(emailRegex)) {
                    return true;
                } else {
                    return false;
                }

            }

            //Check URL Validation
            that.checkUrlValidation = function (url) {
                if (url.match(urlRegex)) {
                    return true;
                } else {
                     return false;
                }

            }
            
            that.checkNameValidation =function(name){
                if (name.match(nameRegex)) {
                    return true;
                } else {
                    return false;
                }
            }
        });

















