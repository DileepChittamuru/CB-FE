(function() {
	angular
	.module("myApp", ['ui.router'])
	.config(function($stateProvider,$urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
		$stateProvider
			.state("home", {
					url:'/home',
					templateUrl:"src/widgets/home/home.html",
					controller: 'homeController'
			})
			.state("login", {
					url:'/login',
					templateUrl:'src/widgets/login/login.html',
					controller: 'loginController'
			})
			.state("signUp", {
					url:'/signUp',
					templateUrl:'src/widgets/sign-up/sign-up.html',
					controller: 'signUpController'
			});
	});
}());




	




