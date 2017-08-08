
(function() {
    'use strict';

    angular
        .module('cobrowse')
        .controller('loginController', loginController);

    loginController.$inject = ['$scope'];
    /* @ngInject */
    function loginController($scope) {
        var self = this;
       console.log("loginController calling")
    }
})();
