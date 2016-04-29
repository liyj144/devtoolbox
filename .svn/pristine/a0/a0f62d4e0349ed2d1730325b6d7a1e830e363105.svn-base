mainApp
	.controller('WelcomeCtrl', function($scope){
	})
	.controller('ClockCtrl', function($scope, moment, $interval){
		function refreshTime(){
			var m = moment();
			$scope.timezone = m.format('ZZ');
			$scope.meridiem = m.format('A');
			$scope.unixTime = m.format('X');
			$scope.date = m.format("YYYY-MM-DD");
			$scope.time = m.format("HH:mm:ss");
			$scope.datetime = m.format("YYYY-MM-DD HH:mm:ss");
		}
		var timer = $interval(refreshTime, 1000);
		$scope.$on('$destroy', function(){
			$interval.cancel(timer);
		});
	})
	.controller('PythonTime', function($scope){

	})
	.controller('PhpTime', function($scope){

	})
	.controller('JsTime', function($scope){

	})
	.controller('UnixTime', function($scope){
		
	})
	.controller('GoTime', function($scope){
		
	})
;
