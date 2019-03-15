teacherApp.service('teacherService', function ($http) {
	this.getAllTeachers = function () {
		return $http.get("/Teachers/GetTeacher");
	}

	this.addNewTeacher = function (teacher) {
		var request = $http({
			method: 'post',
			url: '/Teacher/AddNewTeacher',
			data: teacher
		});

		return request;
	}
})