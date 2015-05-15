(function(angular){
	'use strict';
	angular.module(
		'CopyApp',
		[
		]
	);
	// Make an element copyable
	angular.module('CopyApp').directive('copyButton', [ function() {
		return {
			restrict: 'AE',
			templateUrl : '/templates/copy_button.html',
			transclude: true,
			link: function(scope, el) {
				el.attr('title', 'Click to copy to clipboard');
				scope.copy = function() {
					el.focus().select();
					document.execCommand('SelectAll');
					document.execCommand('Copy');
					console.info('Copied to clipboard \'' + el.text() + '\'');
				};
			}
		};
	}]);
	angular.module('CopyApp').directive('mailtoButton', [ function() {
		return {
			restrict: 'AE',
			template : '<a href="" target="_blank">Open in Mail Client</a>',
			link: function(scope, el) {
				el.attr('title', 'Click to launch mail app');
				el.on('click', function() {
					el.find('a').attr('href', 'mailto:status@clockwork.net?subject=Snapshot&body=' + encodeURI($('.selectable').text()));
				})
			}
		};
	}]);
})(angular);