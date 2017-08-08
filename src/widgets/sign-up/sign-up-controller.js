(function() {
    'use strict';

    angular
        .module('cobrowse')
        .controller('signUpController', signUpController);

    /* @ngInject */
    signUpController.$inject = ['$scope', 'request'];

    /*
    * @desctipon: This controller is used to handle the sign up functionality
    *  validations and invoke rest services
    * @requires $scope
    * @requires request
    *
    */
    function signUpController($scope, request) {
        var self = this;

        /*
        * @description: This function is used to invoke signin service
        */
        self.signUp = function() {
            var params = self.customer;
            request.postService('register', params, 'post', function(data) {
                console.log("data",data);
                self.customer = {};
            });
        };
        /*
        * global variables
        */
        self.customer = {};
    }
})();
