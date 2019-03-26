using CollegeManager.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CollegeManager.Controllers
{
    public class TeacherController : Controller
    {
	   //GET Teacher/GetTeacher
       public JsonResult GetTeacher()
		{
			using (var database = new TeacherEntities())
			{
				List<Teacher> listTeacher = database.Teachers.ToList();

				return Json(listTeacher, JsonRequestBehavior.AllowGet);
			}
		}
    }
}