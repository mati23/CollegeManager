/**
 * As seen in https://docs.angularjs.org/guide/concepts we have a MVC similar concept for Angular files. 
 * Here we create the Module of the Teacher model and will be responsable for turn it global the responsabilities such as
 * the controllers, services, views, etc.
 * I also created a Controller.js and a Service.js files to comunicate within the module. */

var teacherApp;

(function () {
	teacherApp = angular.module('teachers',[]);
})();