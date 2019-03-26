teacherApp.controller('teacherCtrl', function ($scope, teacherService) {

	loadTeacher();

	function loadTeacher() {
		var listTeachers = teacherService.getAllTeachers();

		listTeachers.then(function (e) {
			$scope.Teachers = e.data;
		},
			function () {
				alert('Something went wrong!');
			});
	}
});