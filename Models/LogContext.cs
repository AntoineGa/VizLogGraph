using System;
using System.Data.Entity;
using System.Collections.Generic;
using System.IO;
using VisualizeLogs.Models;
using System.Collections;
using System.Linq;
using System.Web;
using System.Web.Mvc;
//using Microsoft.Data.Edm;

namespace VisualizeLogs.Models
{
    public class LogContext: DbContext
    {
        public LogContext()
        {

        }

        public LogContext(string root) 
                : base("name=LogsContext")
        {
            //Server.MapPath("~/")
            string directory = root + @"..\..\LogFiles\http\RawLogs";
            FileInfo[] files = new DirectoryInfo(directory).GetFiles("*.log");

            IEnumerable<LogDto> logcoll = null;
            IEnumerable<LogDto> res = null;
            List<LogDto> logcollList = null;

            if (files.Any())
            {
                List<LogDto> logs = new List<LogDto>();
                IEnumerable<string> lines = ReadLogFile(files.Where<FileInfo>(l=> l.Length > 1024).First<FileInfo>()).Skip(2);
                logcoll = from l in lines
                          let columns = l.Split(' ')
                          select new LogDto()
                          {
                              Datetime = DateTime.Parse(columns[0] + " " + columns[1]),
                              Sitename = columns[2],
                              IP = columns[8],
                              HttpCode = Int32.Parse(columns[13]),
                              Sc_bytes = Int32.Parse(columns[16]),
                              Cs_bytes = Int32.Parse(columns[17]),
                              TimeTaken = Int32.Parse(columns[18])

                          };

                res = from l in logcoll
                          group l by l.IP into g
                          select new LogDto() { 
                            Count = g.Count(),
                            IP = g.Key
                          };

            }
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

        public IList<LogDto> Logs { get; set; }

        public void Append(LogDto log)
        {
            Logs.Add(log);
        }

        //public System.Data.Entity.DbSet<VisualizeLogs.Models.LogDto> LogDtoes { get; set; }


        //Get Metada in order to query it
        //private IEdmModel GetEdmModel()
        //{
        //    ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
        //    builder.EntitySet<Book>("Books");
        //    builder.ComplexType<Address>(); // should add explictly
        //    return builder.GetEdmModel();
        //}
    }
}