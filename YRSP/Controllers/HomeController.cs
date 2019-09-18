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
            //ViewBag.Message = "Your Education page.";

            return View();
        }

        public ActionResult School()
        {
            //ViewBag.Message = "Your School page.";

            return View();
        }

        public ActionResult About()
        {
            //ViewBag.Message = "Your Abour us page.";

            return View();
        }

        public ActionResult Events()
        {
            return View();
        }

        public ActionResult Career()
        {
            return View();
        }

        public ActionResult Skill()
        {
            return View();
        }

        public ActionResult Find_job()
        {
            return View();
        }
    }
}