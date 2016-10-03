// top level app
myApp = angular.module('myApp', []);

// creating the controller
myApp.controller("MainController", ['$scope', function($scope) {
	$scope.todo = [{}]; // todo items go here
	// capturing new items and putting them into the array
	$scope.addNew = function(){
		$scope.todo.push({
			'rank': $scope.rank,
			'info': $scope.info
		});
	};
	// giving the orderBy a property to sort using the ordered buttons
	$scope.sortBy = function(property) {
    	$scope.property = property;
  	};

}]);