var app = angular.module('mainModule', ['ngRoute', 'ngAnimate', 'projectsModule', 'contactModule']);

app.directive('contact', function(){

	return {
		restrict: 'E',
		templateUrl: 'views/contact.html',
		controller: 'ContactController',
		controllerAs: 'contact'
	}
});

app.service('MainService', function(){

	var introTab = new Tab('Introduction', '#/');
	introTab.setActive();
	var projectsTab = new Tab('Projects', '#!projects');
	var contactTab = new Tab('Contact', '#!contact');

	var mainService = {};
	mainService.currentTab = introTab.name;
	mainService.tabs = [contactTab, projectsTab, introTab];
	
	mainService.setTab = function(tabNum) {

		if (tabNum === 0){
			return;
		}

		var i;
		for (i=0; i<mainService.tabs.length; i++){
			mainService.tabs[i].setUnactive();
		}

		mainService.tabs[tabNum].setActive();
		mainService.currentTab = mainService.tabs[tabNum].name;
	}

	return mainService;
});

app.controller('MainController', function(MainService){

	this.tabs = MainService.tabs;
	this.currentTab = MainService.currentTab;

	this.setTab = function(tabNum) {
		MainService.setTab(tabNum);
		this.currentTab = MainService.currentTab;
	}
});

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
