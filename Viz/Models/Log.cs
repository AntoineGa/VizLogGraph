using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace Viz.Models
{
    public class Log
    {

        public Log()
        {
            Key = Guid.NewGuid();
        }

        [Key]
        public Guid Key { get; set; }

        public DateTimeOffset Datetime { get; set; }

        //public DateTimeOffset Time { get; set; }

        public string Path { get; set; }

        public string Method { get; set; }

        public string Sitename { get; set; }

        public string IP { get; set; }

        public int HttpCode { get; set; }

        public int Cs_bytes { get; set; }
        
        public int Sc_bytes { get; set; }

        public int TimeTaken { get; set; }

        //public long StartTime { get { return Datetime.Ticks; } }

        public DateTimeOffset Endtime { get { return Datetime.AddMilliseconds(TimeTaken); } set { return; } }
        
        public int Count { get; set; }
    }
}