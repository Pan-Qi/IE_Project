using SendGrid;
using SendGrid.Helpers.Mail;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;

namespace YRSP.Utils
{
    public class EmailSender
    {
        public void Send(String toEmail, String subject, String contents, String link)
        {
            System.Diagnostics.Debug.WriteLine("sending");
            var client = new SendGridClient(ConfigurationManager.AppSettings["SendGridToken"]);
            var from = new EmailAddress("noreply@tinv.tinv", "Tinv");
            var to = new EmailAddress(toEmail, "");
            var plainTextContent = contents;
            var htmlContent = "<p>" + contents + "</p>" + "<Br />" + "<a href=\"" + link + "\">" + link + "</a>";
            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);
            var response = client.SendEmailAsync(msg);
        }
    }
}