/**
 This controller will use the studentService to get all registries from the
 student controller and fetch all the data into a table rendered in the Students view. */

studentApp.controller('studentCtrl', function ($scope, studentService) {

	loadStudents();

	function loadStudents() {
		var listStudents = studentService.getAllStudents();

		listStudents.then(function (d) {
			$scope.Students = d.data;
		},
			function () {
				alert('Something went wrong while listing the Students');
			});
	}
	
})