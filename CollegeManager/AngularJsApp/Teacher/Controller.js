

teacherApp.controller('teacherCtrl', function ($scope, teacherService) {

	loadTeachers();

	function loadTeachers() {
		var listTeachers = teacherService.getAllTeachers();

		listTeachers.then(function (d) {
			$scope.Teachers = d.data;
		},
			function () {
				alert('Something went wrong while listing the teachers');
			});
	}
	
})