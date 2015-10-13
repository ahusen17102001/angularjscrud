var App = angular.module('myApp', ['angularUtils.directives.dirPagination']);
        App.controller('EmpCtrl', function ($scope, $http){
        $http.get('emp.json').success(function(data) {
          $scope.emp = data;
        });

$scope.removeRow = function(name){				
		var index = -1;		
		var comArr = eval( $scope.emp );
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].name === name ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.emp.splice( index, 1);		
	};

$scope.addRow = function(){		
	$scope.emp.push({'name':$scope.name,'job': $scope.job, 'sal':$scope.sal});
	$scope.name='';
	$scope.job='';
	$scope.sal='';
};

$scope.removeItem = function(index){
			$scope.emp.splice(index,1);
		}
		$scope.editItem = function(index){
			 $scope.editing = $scope.emp.indexOf(index);
			   
		}
		 $scope.saveField = function(index) {
        if ($scope.editing !== false) {
			$scope.editing = false;
        }       
    };
    
    });

       