(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('signUpController', signUpController);

    signUpController.$inject = ['$scope'];
    /* @ngInject */
    function signUpController($scope) {
        var self = this;
        self.customer = {};
       console.log("signUpController calling")
    }
})();
