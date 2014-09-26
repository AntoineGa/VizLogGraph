using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.IO;
using VisualizeLogs.Models;
using System.Collections;

namespace VisualizeLogs.Controllers
{
    public class LogController : Controller
    {


        //private LogContext db = new LogContext(HostingEnvironment.MapPath("~/"));

        //
        // GET: /Log/

        public ActionResult Index()
        {
            //IList<LogDto> logcollList = db.Logs;
            //ViewBag.Files = from f in files select f.Name;
            //ViewBag.Count = res.Count<LogDto>();
            //logcollList = res.ToList<LogDto>();
            //ViewBag.Logs = logcollList;
            return View();
        }



    }
}
