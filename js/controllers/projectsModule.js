angular.module('projectsModule', [])

.controller('ProjectsController', function($scope){

	this.currentTab = 0;

	this.setTab = function(tab){
		this.currentTab = tab;
	};
});