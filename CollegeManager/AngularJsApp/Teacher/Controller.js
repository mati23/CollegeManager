

teacherApp.controller('teacherCtrl', function ($scope, teacherService) {

	loadTeachers();

	//This method will load all the teachers properties
	function loadTeachers() {
		var listTeachers = teacherService.getAllTeachers();

		listTeachers.then(function (d) {
			$scope.Teachers = d.data;
		},
			function () {
				alert('Something went wrong while listing the teachers');
			});
	}


	$scope.addTeacher = function () {
		var teacher = {
			teacherId: $scope.teacherId,
			teacherName: $scope.teacherName,
			teacherBirthday: $scope.teacherBirthday,
			teacherSalary: $scope.teacherSalary
		};

		var addInformation = teacherService.addNewTeacher(teacher);

		addInformation.then(function (d) {
			if (d.data.success === true) {
				loadTeachers();
				alert('Teacher Successfully Added!');

				$scope.cleanData();
			} else {
				alert('Something went wrong');
			}
		},
			function () {
				alert('Error while trying to add a new Teacher');
			});
	}

	$scope.cleanData = function () {
		$scope.teacherId: '',
		$scope.teacherName: '',
		$scope.teacherBirthday: '',
		$scope.teacherSalary: ''
	}


});