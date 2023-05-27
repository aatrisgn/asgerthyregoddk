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

public class GetExperience
{
	private readonly ILogger<GetExperience> _logger;

	public GetExperience(ILogger<GetExperience> log)
	{
		_logger = log;
	}

	[FunctionName("GetExperience")]
	[OpenApiOperation(operationId: "GetExperience", tags: new[] { "Experience" })]
	[OpenApiResponseWithBody(statusCode: HttpStatusCode.OK, contentType: "application/json", bodyType: typeof(IEnumerable<ExperienceResponse>), Description = "The OK response")]
	public async Task<IActionResult> Run(
		[HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "Experience")] HttpRequest req)
	{
		_logger.LogInformation("C# HTTP trigger function processed a request.");
		return new OkObjectResult("OK");
	}
}

