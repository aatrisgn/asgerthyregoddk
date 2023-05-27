using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Attributes;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using TGC.Site.API.Models.Endpoints;

namespace TGC.Site.API.Endpoints;

public class GetEducation
{
	private readonly ILogger<GetEducation> _logger;

	public GetEducation(ILogger<GetEducation> log)
	{
		_logger = log;
	}

	[FunctionName("GetEducation")]
	[OpenApiOperation(operationId: "GetEducation", tags: new[] { "Education" })]
	[OpenApiResponseWithBody(statusCode: HttpStatusCode.OK, contentType: "application/json", bodyType: typeof(IEnumerable<EducationResponse>), Description = "The OK response")]
	public async Task<IActionResult> Run(
		[HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "Education")] HttpRequest req)
	{
		_logger.LogInformation("C# HTTP trigger function processed a request.");
		return new OkObjectResult("OK");
	}
}

