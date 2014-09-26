using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using System.Web.OData;
using System.Web.OData.Routing;
using System.Web.Hosting;
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
    public class Logs2Controller : ODataController
    {
        private LogContext db = new LogContext(HostingEnvironment.MapPath("~/"));

        // GET: odata/Logs
        [EnableQuery]
        public IQueryable<Log> GetLogs()
        {
            return db.Logs;
        }

        // GET: odata/Logs(5)
        [EnableQuery]
        public SingleResult<Log> GetLog([FromODataUri] DateTimeOffset key)
        {
            return SingleResult.Create(db.Logs.Where(log => log.Datetime == key));
        }

        // PUT: odata/Logs(5)
        public IHttpActionResult Put([FromODataUri] DateTimeOffset key, Delta<Log> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Log log = db.Logs.Find(key);
            if (log == null)
            {
                return NotFound();
            }

            patch.Put(log);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LogExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(log);
        }

        // POST: odata/Logs
        public IHttpActionResult Post(Log log)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Logs.Add(log);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (LogExists(log.Datetime))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return Created(log);
        }

        // PATCH: odata/Logs(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] DateTimeOffset key, Delta<Log> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Log log = db.Logs.Find(key);
            if (log == null)
            {
                return NotFound();
            }

            patch.Patch(log);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LogExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(log);
        }

        // DELETE: odata/Logs(5)
        public IHttpActionResult Delete([FromODataUri] DateTimeOffset key)
        {
            Log log = db.Logs.Find(key);
            if (log == null)
            {
                return NotFound();
            }

            db.Logs.Remove(log);
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool LogExists(DateTimeOffset key)
        {
            return db.Logs.Count(e => e.Datetime == key) > 0;
        }
    }
}
