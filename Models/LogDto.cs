using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace VisualizeLogs.Models
{
    public class LogDto
    {
        public LogDto()
        {

        }

        [Key]
        public DateTime Datetime { get; set; }

        public string Sitename { get; set; }

        public string IP { get; set; }

        public int HttpCode { get; set; }

        public int Cs_bytes { get; set; }
        
        public int Sc_bytes { get; set; }

        public int TimeTaken { get; set; }

        public int Count { get; set; }
    }
}