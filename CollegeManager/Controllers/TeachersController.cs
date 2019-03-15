using CollegeManager.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CollegeManager.Controllers
{
    public class TeachersController : Controller
    {
        /*
		 * The controller will retrieve all the actions based on the browser requests.
		 * In this case, it will make the requests to the database using the models and 
		 * givin back an answer to the view.**/

		// GET Teacher/GetTeacher
        public JsonResult GetTeacher()
		{
			using (var database = new TeacherEntities())
			{
				List<Teacher> listTeachers = database.Teachers.ToList();
				return Json(listTeachers, JsonRequestBehavior.AllowGet);
			}		
		}


		//POST Teacher/AddNewTeacher
		[HttpPost]
		public JsonResult AddNewTeacher(Teacher teacher)
		{
			if(teacher != null)
			{
				using (var database = new TeacherEntities())
				{
					database.Teachers.Add(teacher);
					database.SaveChanges();

					return Json(new { success = true });
				}
			}
			return Json(new { success = false });
		}
    }
}