angular.module('descriptionModule', [])

.controller('DescriptionCtrl', ['$scope', function($scope){

	$scope.description = {};
	$scope.description.currentTab = 1;
	$scope.description.activities = ['Read', 'Hike', 'Gym', 'Code'];
	$scope.description.projects = ['Maze AI', 'Bill Split', 'TurnKey', 'Linked List Visualizer'];

	$scope.description.isSet = function(tab){
		return tab === $scope.description.currentTab;
	};

	$scope.description.setTab = function(tab){
		$scope.description.currentTab = tab;
	};

}])

.service('descriptionService', )

.directive('school', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/school.html'
	};
})

.directive('projects', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/projects.html'
	};
})

.directive('aboutMe', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/about-me.html'
	};
});