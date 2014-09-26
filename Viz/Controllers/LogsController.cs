using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.ModelBinding;
using System.Web.OData;
using System.Web.OData.Query;
using System.Web.OData.Routing;
using Viz.Models;
using Microsoft.Data.OData;
using System.Web.Hosting;
using System.IO;
using Viz.Models;

namespace Viz.Controllers
{
    /*
    The WebApiConfig class may require additional changes to add a route for this controller. Merge these statements into the Register method of the WebApiConfig class as applicable. Note that OData URLs are case sensitive.

    using System.Web.Http.OData.Builder;
    using System.Web.Http.OData.Extensions;
    using Viz.Models;
    ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
    builder.EntitySet<Log>("Logs");
    config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
    */
    public class LogsController : ODataController
    {
        private static ODataValidationSettings _validationSettings = new ODataValidationSettings();

        private static List<Log> LogcollList;

        public LogsController()
        {
            Init(HostingEnvironment.MapPath("~"));
        }

        private IEnumerable<string> ReadLogFile(FileInfo file)
        {
            using (StreamReader sw = file.OpenText())
            {
                string line = "";
                while ((line = sw.ReadLine()) != null)
                {
                    yield return line;
                }

            }

        }

        private void Init(string root)
        {
            //string root = HostingEnvironment.MapPath("~/");
            string directory = root + @"..\..\LogFiles\http\RawLogs";
            FileInfo[] files = new DirectoryInfo(directory).GetFiles("*.log");

            IEnumerable<Log> logcoll = null;
            IEnumerable<Log> res = null;
            //List<Log> logcollList = null;

            if (files.Any())
            {
                List<Log> logs = new List<Log>();
                List<string> lines = new List<string>();
                foreach (var item in files)
                {
                    lines.AddRange(ReadLogFile(item).Skip(2));    
                }
                logcoll = from l in lines
                          let columns = l.Split(' ')
                          select new Log()
                          {
                              Key = Guid.NewGuid(),
                              Datetime = DateTime.Parse(columns[0] + " " + columns[1]),
                              Sitename = columns[2],
                              Method = columns[3],
                              Path = columns[4],
                              IP = columns[8],
                              HttpCode = Int32.Parse(columns[13]),
                              Sc_bytes = Int32.Parse(columns[16]),
                              Cs_bytes = Int32.Parse(columns[17]),
                              TimeTaken = Int32.Parse(columns[18])

                          };

                //res = from l in logcoll
                //      group l by l.IP into g
                //      select new Log()
                //      {
                //          Count = g.Count(),
                //          IP = g.Key
                //      };

                LogcollList = logcoll.OrderByDescending(l => l.Datetime).ToList();

            }
        }
        
        // GET: odata/Logs
        [EnableQuery]
        public IHttpActionResult GetLogs(ODataQueryOptions<Log> queryOptions)
        {
            // validate the query.
            try
            {
                queryOptions.Validate(_validationSettings);
            }
            catch (ODataException ex)
            {
                return BadRequest(ex.Message);
            }
            IQueryable<Log> quer =  queryOptions.ApplyTo(LogcollList.AsQueryable<Log>()) as IQueryable<Log>;
            return Ok<IQueryable<Log>>(quer);
            //return StatusCode(HttpStatusCode.NotImplemented);
        }

        // GET: odata/Logs(5)
        public IHttpActionResult GetLog([FromODataUri] System.Guid key, ODataQueryOptions<Log> queryOptions)
        {
            // validate the query.
            try
            {
                queryOptions.Validate(_validationSettings);
            }
            catch (ODataException ex)
            {
                return BadRequest(ex.Message);
            }

            // return Ok<Log>(log);
            return StatusCode(HttpStatusCode.NotImplemented);
        }

        // PUT: odata/Logs(5)
        public IHttpActionResult Put([FromODataUri] System.Guid key, Delta<Log> delta)
        {
            Validate(delta.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // TODO: Get the entity here.

            // delta.Put(log);

            // TODO: Save the patched entity.

            // return Updated(log);
            return StatusCode(HttpStatusCode.NotImplemented);
        }

        // POST: odata/Logs
        public IHttpActionResult Post(Log log)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // TODO: Add create logic here.

            // return Created(log);
            return StatusCode(HttpStatusCode.NotImplemented);
        }

        // PATCH: odata/Logs(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] System.Guid key, Delta<Log> delta)
        {
            Validate(delta.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // TODO: Get the entity here.

            // delta.Patch(log);

            // TODO: Save the patched entity.

            // return Updated(log);
            return StatusCode(HttpStatusCode.NotImplemented);
        }

        // DELETE: odata/Logs(5)
        public IHttpActionResult Delete([FromODataUri] System.Guid key)
        {
            // TODO: Add delete logic here.

            // return StatusCode(HttpStatusCode.NoContent);
            return StatusCode(HttpStatusCode.NotImplemented);
        }
    }
}
