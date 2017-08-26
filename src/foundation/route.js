/*
* Routing mechanisam
*
*/
(function() {
	angular
	.module("cobrowse", ['ui.router'])
	.config(function($stateProvider,$urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
		$stateProvider
		.state("home", {
			url:'/home',
			templateUrl:"src/widgets/home/home.html"
		})
		.state("login", {
			url:'/login',
			templateUrl:'src/widgets/login/login.html'
		})
		.state("signUp", {
			url:'/signUp',
			templateUrl:'src/widgets/sign-up/sign-up.html'
		});
	});
}());
