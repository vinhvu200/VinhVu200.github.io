var app = angular.module('mainModule', ['ngRoute', 'ngAnimate', 'projectsModule', 'contactModule', 'introductionModule']);

app.directive('contact', function(){

	return {
		restrict: 'E',
		templateUrl: 'views/contact.html',
		controller: 'ContactController',
		controllerAs: 'contact'
	}
});

app.config(function($routeProvider){

	$routeProvider

	.when('/', {
		templateUrl: 'views/introduction.html',
		controller: 'IntroductionController',
		controllerAs: 'intro'
	})

	.when('/projects', {
		templateUrl: 'views/projects.html',
		controller: 'ProjectsController',
		controllerAs: 'projects'
	})

	.when('/contact', {
		templateUrl: 'views/contact.html',
		controller: 'ContactController',
		controllerAs: 'contact'
	});
	
});
