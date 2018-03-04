var app = angular.module('mainModule', ['ngRoute', 'ngAnimate', 'projectsModule', 'contactModule']);

app.config(function($routeProvider){

	$routeProvider

	.when('/', {
		templateUrl: 'views/introduction.html'
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
