/**
 * @ngdoc controller
 * @name Panel Properties
 * @module watchapp
 * @requires  Item, $state, PermissionsService
 *
 * @description Panel Property Controller. 
 *
 * @todo: Let's try to combine all of these into one controller. 
 */
(function(angular){
	'use strict';

	angular.module('EasySnapsApp').controller('snapshotCtrl', ['$scope', '$filter',
		
		function ($scope, $filter) {
			var project_base = { client  : "",
				                 project : "", 
								 text    : "",
								 hours   : 0,
								 percentage : 0 };
			$scope.working_on = []
			$scope.working_on.push(angular.copy(project_base))
			$scope.markdown = false;
			$scope.percent = false;
			$scope.base = 40;
			$scope.addNew = function() {
				$scope.working_on.push(angular.copy(project_base));
			}
			$scope.remove = function(project) {
				var index = $scope.working_on.indexOf(project);
				$scope.working_on.splice(index, 1);
			}
			$scope.getTotalHours = function() {
				var total_hours = 0
				angular.forEach($scope.working_on, function(item) {
					if(item.hours > 0 ) {
						total_hours = total_hours + item.hours;
					}
				})
				return total_hours;
			}
			$scope.getPercentage = function(project) {
				return project.hours / $scope.getTotalHours();

			}
			$scope.getTotalPercent = function() {
				var total_percent = 0
				angular.forEach($scope.working_on, function(item) {
					if(item.percentage > 0 ) {
						total_percent = total_percent + item.percentage;
					}
				})
				if( total_percent > 100 ) {
					return 100;
				}
				return total_percent;
			}
			$scope.getHours = function(project) {
				return $scope.base * (project.percentage / 100);
			}
			$scope.getFullTimePercentage = function() {
				var total = $scope.getTotalHours();
				if(total >= $scope.base ) {
					return 1;
				}
				else {
					return total / $scope.base;
				}
				

			}
			$scope.switchFormat = function() {
				if($scope.markdown) {
					$scope.markdown = false;
				}
				else {
					$scope.markdown = true;
				}
				return $scope.markdown;
				
			}
			$scope.switchEntryFormat = function() {
				if($scope.percent) {
					$scope.percent = false;
				}
				else {
					$scope.percent = true;
				}
				$scope.convertTime();
				return $scope.percent;
				
			}

			$scope.switchCalculations = function() {
				if($scope.percent) {
					$scope.percent = false;
				}
				else {
					$scope.percent = true;
				}
				$scope.convertTime();
			}
			var convertToPercent = function() {
				angular.forEach($scope.working_on, function(item) {
					var hours = item.hours / $scope.base;
					item.percentage = hours * 100;
					item.percentage = parseInt($filter('number')(item.percentage, 1), 10);
				});
			}
			var convertToHours = function() {
				angular.forEach($scope.working_on, function(item) {
					var hours = (item.percentage / 100) * $scope.base;
					item.hours = parseInt($filter('number')(hours, 1), 10);
				});
			}
			$scope.convertTime = function() {
				if( $scope.percent ) {
					convertToPercent();
				}
				else {
					convertToHours();
				}
			}

			$scope.addRemaining = function(project) {
				if( $scope.percent ) {
					project.percentage = 100 - $scope.getTotalPercent() + project.percentage;
				}
				else {
					project.hours = $scope.base - $scope.getTotalHours() + project.hours;
				}
			}
		}]);
})(angular);