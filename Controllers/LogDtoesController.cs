using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using System.Web.OData;
using VisualizeLogs.Models;

namespace VisualizeLogs.Controllers
{
    public class LogDtoesController : ODataController
    {
        private LogContext db = new LogContext();

        [EnableQuery]
        public IQueryable<LogDto> Get()
        {
            return db.Logs.AsQueryable();
        }


        public IQueryable<LogDto> Post(LogDto book)
        {
            db.Append(book);
            return db.Logs.AsQueryable();
        }
    
    }
}