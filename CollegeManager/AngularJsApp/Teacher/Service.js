teacherApp.service('teacherService', function ($http) {
	this.getAllTeachers = function () {
		return $http.get("/Teachers/GetTeacher");
	}
})