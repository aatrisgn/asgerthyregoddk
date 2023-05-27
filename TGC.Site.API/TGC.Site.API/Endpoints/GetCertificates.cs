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

public class GetCertificates
{
	private readonly ILogger<GetCertificates> _logger;

	public GetCertificates(ILogger<GetCertificates> log)
	{
		_logger = log;
	}

	[FunctionName("GetCertificates")]
	[OpenApiOperation(operationId: "GetCertificates", tags: new[] { "Certficates" })]
	[OpenApiResponseWithBody(statusCode: HttpStatusCode.OK, contentType: "application/json", bodyType: typeof(IEnumerable<EducationResponse>), Description = "The OK response")]
	public async Task<IActionResult> Run(
		[HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "Certficates")] HttpRequest req)
	{
		_logger.LogInformation("C# HTTP trigger function processed a request.");
		return new OkObjectResult("OK");
	}
}

