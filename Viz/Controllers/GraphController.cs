using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Viz.Controllers
{
    public class GraphController : Controller
    {
        // GET: Graph
        public ActionResult Index()
        {
            return View("View");
        }

        public ActionResult View()
        {
            return View("View");
        }


        public ActionResult StackedBars()
        {
            return View("StackedBars");
        }

        public ActionResult DiscreteBar()
        {
            return View("DiscreteBar");
        }

        public ActionResult Timeline()
        {
            return View("Timeline");
        }

        public ActionResult Scatterplot()
        {
            return View("Scatterplot");
        }        
    }
}