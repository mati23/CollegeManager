/**
 This service will make the request to the Student Controller end get the
 registries from the database.*/
studentApp.service('studentService', function ($http) {
	this.getAllStudents = function () {
		return $http.get("/Students/GetStudent");
	}
})