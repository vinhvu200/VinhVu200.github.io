var app = angular.module('mainModule', ['ngRoute', 'projectsModule']);

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
		templateUrl: 'views/contact.html'
	});
	
});
