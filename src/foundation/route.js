/*
* Routing mechanisam
*
*/
(function() {
	angular
	.module("cobrowse", ['ui.router', 'ngMessages'])
	.config(function($stateProvider,$urlRouterProvider, $locationProvider) {
		$urlRouterProvider.otherwise('/login');
		$stateProvider
		.state("home", {
			url:'/home',
			templateUrl:"src/widgets/home/home.html"
		})
		.state("login", {
			url:'/login',
			templateUrl:'src/widgets/login/login.html'
		})
		.state("openAccount", {
			url:'/openAccount',
			templateUrl:'src/widgets/open-account/open-account.html'
		});
		 /*$locationProvider.html5Mode(true);*/
	});
}());
