var jchat = angular.module('chat', ['ngRoute']);
jchat.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/chat.html',
                controller  : 'mainController'
            }).
            otherwise({
                redirectTo: '/',
                controller  : 'mainController'
            });
    }]);