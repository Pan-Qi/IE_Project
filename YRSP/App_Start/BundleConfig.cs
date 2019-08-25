using System.Web;
using System.Web.Optimization;

namespace YRSP
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery/*.min.js",
                        "~/Scripts/jquery/jquery-2.1.4.min.js"
                        ));

            //bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
            //            "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            //bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
            //            "~/Scripts/modernizr-*"));

            //bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
            //          "~/Scripts/bootstrap.js"));

            bundles.Add(new ScriptBundle("~/Bundles/js").Include(
                "~/Scripts/bootstrap.js",
                "~/Scripts/classie.js",
                "~/Scripts/demo1.js",
                "~/Scripts/easing.js",
                "~/Scripts/jquery.flipster.js",
                "~/Scripts/jquery.pogo-slider.min.js",
                "~/Scripts/lsb.min.js",
                "~/Scripts/main.js",
                "~/Scripts/modernizr.js",
                "~/Scripts/move-top.js",
                "~/Scripts/numscroller-1.0.js",
                "~/Scripts/owl.carousel.js"
                ));

            bundles.Add(new ScriptBundle("~/Bundles/population").Include(
                "~/Scripts/population.js"
                ));

            //bundles.Add(new StyleBundle("~/Content/css").Include(
            //          "~/Content/bootstrap.css",
            //          "~/Content/site.css"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/bootstrap.css",
                "~/Content/font-awesome.css",
                "~/Content/jquery.flipster.css",
                "~/Content/lsb.css",
                "~/Content/nav.css",
                "~/Content/owl.carousel.css",
                "~/Content/pogo-slider.min.css",
                "~/Content/style.css"
                ));
        }
    }
}
