using CollegeManager.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CollegeManager.Controllers
{
    public class StudentsController : Controller
    {
		/*
		 * The controller will retrieve all the actions based on the browser requests.
		 * In this case, it will make the requests to the database using the models and 
		 * givin back an answer to the view.**/

		// GET: Students
		public JsonResult GetStudent()
		{
			using (var database = new StudentEntities())
			{
				List<Student> listStudents = database.Students.ToList();
				return Json(listStudents, JsonRequestBehavior.AllowGet);
			}
		}
	}
}