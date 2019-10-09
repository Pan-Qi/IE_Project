using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using YRSP.Models;
using SendGrid;
using SendGrid.Helpers.Mail;
using System.Configuration;

namespace YRSP.Controllers
{
    public class UsersController : Controller
    {
        private UserModelContainer db = new UserModelContainer();

        //// GET: Users
        //public ActionResult Index()
        //{
        //    return View(db.UserSet.ToList());
        //}

        //// GET: Users/Details/5
        //public ActionResult Details(int? id)
        //{
        //    if (id == null)
        //    {
        //        return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
        //    }
        //    User user = db.UserSet.Find(id);
        //    if (user == null)
        //    {
        //        return HttpNotFound();
        //    }
        //    return View(user);
        //}

        // GET: Users/Create
        public ActionResult Event()
        {
            return View();
        }

        // POST: Users/Create
        // 为了防止“过多发布”攻击，请启用要绑定到的特定属性，有关 
        // 详细信息，请参阅 https://go.microsoft.com/fwlink/?LinkId=317598。
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Event([Bind(Include = "user_id,user_email,user_first_name,user_last_name,user_address,user_phone_number")] User user)
        {
            if (ModelState.IsValid)
            {
                db.UserSet.Add(user);
                db.SaveChanges();
                MailSender(user.user_email, "noreply@yrsp.ml","Notification from YRSP" , "Hi, " + user.user_first_name + ". You have successfully subscribed to our event notification.");
                return RedirectToAction("Event");
            }

            return View(user);
        }

        //// GET: Users/Edit/5
        //public ActionResult Edit(int? id)
        //{
        //    if (id == null)
        //    {
        //        return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
        //    }
        //    User user = db.UserSet.Find(id);
        //    if (user == null)
        //    {
        //        return HttpNotFound();
        //    }
        //    return View(user);
        //}

        //// POST: Users/Edit/5
        //// 为了防止“过多发布”攻击，请启用要绑定到的特定属性，有关 
        //// 详细信息，请参阅 https://go.microsoft.com/fwlink/?LinkId=317598。
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public ActionResult Edit([Bind(Include = "user_id,user_email,user_first_name,user_last_name,user_address,user_phone_number")] User user)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        db.Entry(user).State = EntityState.Modified;
        //        db.SaveChanges();
        //        return RedirectToAction("Index");
        //    }
        //    return View(user);
        //}

        //// GET: Users/Delete/5
        //public ActionResult Delete(int? id)
        //{
        //    if (id == null)
        //    {
        //        return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
        //    }
        //    User user = db.UserSet.Find(id);
        //    if (user == null)
        //    {
        //        return HttpNotFound();
        //    }
        //    return View(user);
        //}

        //// POST: Users/Delete/5
        //[HttpPost, ActionName("Delete")]
        //[ValidateAntiForgeryToken]
        //public ActionResult DeleteConfirmed(int id)
        //{
        //    User user = db.UserSet.Find(id);
        //    db.UserSet.Remove(user);
        //    db.SaveChanges();
        //    return RedirectToAction("Index");
        //}

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        [HttpPost]
        public ActionResult IsEmailExists(string user_email)
        {
            return Json(!db.UserSet.Any(x => x.user_email == user_email));
        }

        public void MailSender(string toEmail, string fromEmail, string subject, string content)
        {
            System.Diagnostics.Debug.WriteLine("sending");
            var client = new SendGridClient(ConfigurationManager.AppSettings["SendGridToken"]);
            var from = new EmailAddress("noreply@yrsp.ml", "YRSP");
            var to = new EmailAddress(toEmail, "");
            var plainTextContent = content;
            var htmlContent = content;
            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);
            msg.TemplateId = "d-86aac04f7533429eb7cd98094e55b5a4";
            var response = client.SendEmailAsync(msg);
            System.Diagnostics.Debug.WriteLine(response.Status);
        }
    }
}
