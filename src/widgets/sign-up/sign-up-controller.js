(function() {
    'use strict';

    angular
        .module('cobrowse')
        .controller('signUpController', signUpController);

    /* @ngInject */
    signUpController.$inject = ['$scope', 'request'];

    /*
     * @ngdocs method
     * @name signUpController
     * @desctipon: This controller is used to handle the sign up functionality
     *  validations and invoke rest services
     * @requires $scope
     * @requires request
     */
    function signUpController($scope, request) {
        var self = this;

        $scope.customer = {};
        $scope.focusedflag = '';
        self.stopSend = false;

        // if user is running mozilla then use it's built-in WebSocket
        window.WebSocket = window.WebSocket || window.MozWebSocket;

        if (!window.WebSocket) {
            console.log('Sorry, but your browser doesn\'t support WebSocket.');
            return;
        }

        // open connection
        var connection = new WebSocket('ws://127.0.0.1:1337');

        connection.onopen = function() {
            console.log("caling///", $scope.customer)
            $scope.$watchCollection('customer', function(newVal, oldVal) {
                //  $scope.fousedflag = angular.element(window.document.activeElement).attr('name');
                console.log("called2");
                self.stopSend = true; 
                var msg = {
                    type: "utf8",
                    obj: $scope.customer,
                    date: Date.now()
                };
                if (connection && self.stopSend) {
                    console.log("called", msg)
                    connection.send(JSON.stringify(msg));
                    self.stopSend = false;
                }
            });
        };

        connection.onerror = function(error) {
            // just in there were some problems with connection...
            console.log('Sorry, but there\'s some problem with your ' + 'connection or the server is down.');
        };


        //if()
        // most important part - incoming messages
        connection.onmessage = function(message) {
            try {
                var json = JSON.parse(message.data);
            } catch (e) {
                console.log('Invalid JSON: ', message.data);
                return;
            }
            $scope.$apply(function() {
                console.log("applying", self.stopSend)
                if (json.obj && json.obj.text) {
                    var robj = JSON.parse(json.obj.text);
                    $scope.customer = angular.copy(robj.obj);
                    self.stopSend = false;
                }
            });
        };

        /*
         * @ngdocs method
         * @name signUp
         * @desctipon: This method is used to handle the invoke rest service
         */
        self.signUp = function() {
            var params = self.customer;
            request.postService('register', params, 'post', function(data) {
                console.log("data", data);
                self.customer = {};
            });
        };

        /*
         * global variables
         */
       // $scope.customer = {};
    }
})();
