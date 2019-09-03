using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace YRSP.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Population()
        {
            //ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Education()
        {
            //ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult School()
        {
            //ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}