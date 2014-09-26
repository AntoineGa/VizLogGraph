﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

using System.Web.OData.Routing;
using System.Web.OData.Builder;
using System.Web.OData.Extensions;
using Viz.Models;

namespace Viz
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services



            // Web API routes
            config.MapHttpAttributeRoutes();

            ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
            builder.EntitySet<Log>("Logs");
            ODataRoute route = config.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            config.AddODataQueryFilter();
            
        }
    }
}