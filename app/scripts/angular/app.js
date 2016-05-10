'use strict';

var mainApp = angular.module('mainApp', [
	'ngRoute', 
	"angularMoment", 
	"ui.bootstrap", 
	"hljs"]);
mainApp.config(function($routeProvider, $locationProvider, hljsServiceProvider) {
    $routeProvider
        .when('/', {templateUrl: '/views/tpl/welcome.html', controller: 'WelcomeCtrl'})
        .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);

    hljsServiceProvider.setOptions({
    	tabReplace: '    '
    });
});