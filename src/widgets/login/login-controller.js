(function() {
    'use strict';

    angular
        .module('cobrowse')
        .controller('loginController', loginController);

    loginController.$inject = ['$scope', '$state'];
    /* @ngInject */
    function loginController($scope, $state) {
        var self = this;
        console.log("loginController calling")

        self.login = function() {
            $state.transitionTo('openAccount');
        }
    }
})();
